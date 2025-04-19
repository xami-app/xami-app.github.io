export const formatDate = (isoString: string): string => {
    if(!isoString) return "-";
    const date = new Date(isoString);
    return date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};