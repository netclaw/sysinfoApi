import si from 'systeminformation';

interface CPUInfo {
  cpubrand: string;
  cpucores: number;
  cpumodel: string;
  cpuLoad: any; // You should provide the correct type for cpuLoad
}

interface MemoryInfo {
  memtotal: number;
  memfree: number;
}

interface SystemInfo {
  sysmanufacturer: string;
  sysmodel: string;
  sysversion: string;
}

async function getCpuInfo(): Promise<CPUInfo> {
  const cpuData = await si.cpu();
  const cpuLoad = await si.currentLoad();
  return {
    cpubrand: cpuData.brand,
    cpucores: cpuData.cores,
    cpumodel: cpuData.model,
    cpuLoad, // You should provide the correct type for cpuLoad
  };
}

async function getMemInfo(): Promise<MemoryInfo> {
  const memoryData = await si.mem();
  return {
    memtotal: memoryData.total,
    memfree: memoryData.free,
  };
}

async function getSystemInfo(): Promise<SystemInfo> {
  const sys = await si.system();
  return {
    sysmanufacturer: sys.manufacturer,
    sysmodel: sys.model,
    sysversion: sys.version,
  };
}

export { getCpuInfo, getMemInfo, getSystemInfo };
