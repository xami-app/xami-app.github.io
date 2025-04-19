export interface HardwareStats {
    processCPUUsage: number; // Percent
    totalMemoryMiB: number;
    freeMemoryMiB: number;
    totalSwapMiB: number;
    freeSwapMiB: number;
    totalDiskSpaceMiB: number;
    freeDiskSpaceMiB: number;
    systemUptimeSeconds: number; // MS
}