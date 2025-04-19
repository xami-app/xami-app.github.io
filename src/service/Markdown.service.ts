export const fetchMarkdown = async (path: string): Promise<string | null> => {
    const res = await fetch(path);
    const contentType = res.headers.get('Content-Type');
    const isHtmlFallback = contentType?.includes('text/html');
    if (!res.ok || isHtmlFallback) return null;
  
    return res.text();
  };