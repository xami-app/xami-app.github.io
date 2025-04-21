export function getQueryParams(pathname: string): Record<string, string> {
    const queryParams: Record<string, string> = {};
    
    if (!pathname.includes("?")) return queryParams;

    const queryString = pathname.split("?")[1];
    const pairs = queryString.split("&");

    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        if (key) {
            queryParams[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
    }

    return queryParams;
}
