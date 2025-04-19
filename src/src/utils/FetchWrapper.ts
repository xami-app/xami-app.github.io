import Cookies from "js-cookie";

export class FetchWrapper {
  static async request<T>(
    method: string,
    url: string,
    body?: unknown,
    options?: RequestInit,
    retry: boolean = true
  ): Promise<T> {
    let accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refresh_token");

    const fetchWithToken = async () => {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
          ...options?.headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        ...options,
      });
      return response;
    };

    let response = await fetchWithToken();

    const setCookieHeader = response.headers.get("refresh_cookie");
    if (setCookieHeader) {
      const setCookieHeaders = setCookieHeader.split(',');
      setCookieHeaders.forEach(header => {
        const refreshTokenMatch = header.match(/refresh_token=([^;]+)/);
        if (refreshTokenMatch && refreshTokenMatch[1]) {
          Cookies.set("refresh_token", refreshTokenMatch[1], { sameSite: "Strict" });
        }
      });
    }

    if (response.status === 401 && retry) {
      if (refreshToken) {
        const refreshed = await this.refreshToken(refreshToken);
        if (refreshed) {
          accessToken = Cookies.get("accessToken");
          response = await fetchWithToken();
        }
      }
    }

    if (!response.ok) throw new Error(`${response.statusText}`);

    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) return response.json();
    if (contentType?.includes("text/plain")) return response.text() as unknown as T;
    if (contentType?.includes("application/xml") || contentType?.includes("text/xml")) return response.text() as unknown as T;
    if (contentType?.includes("application/x-www-form-urlencoded")) return response.text() as unknown as T;
    return response.text() as unknown as T;
  }

  static async get<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request("GET", url, undefined, options);
  }

  static async post<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    return this.request("POST", url, body, options);
  }

  static async put<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    return this.request("PUT", url, body, options);
  }

  static async patch<T>(url: string, body?: unknown, options?: RequestInit): Promise<T> {
    return this.request("PATCH", url, body ?? undefined, options);
  }

  static async delete<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request("DELETE", url, undefined, options);
  }

  private static async refreshToken(refreshToken: string): Promise<boolean> {
    try {
      const response = await fetch("/api/auth/refresh", {
        method: "GET",
        headers: {
          "Cookie": `refresh_token=${refreshToken}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        Cookies.set("accessToken", data.token, { sameSite: "Strict" });
        return true;
      }
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
    return false;
  }
}