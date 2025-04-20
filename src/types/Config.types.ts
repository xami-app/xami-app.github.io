export interface ConfigDefinition {
    basePath: string;
    title: string;
    entries: ConfigEntry[];
}

export interface ConfigEntry {
    title: string;
    path?: string;
    children?: ConfigEntry[];
}