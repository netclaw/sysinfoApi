import { getCpuInfo, getMemInfo, getSystemInfo } from './sysInfo';

describe('CPU Info', () => {
  it('should return CPU information with the correct types', async () => {
    const cpuInfo = await getCpuInfo();
    expect(typeof cpuInfo.cpubrand).toBe('string');
    expect(typeof cpuInfo.cpucores).toBe('number');
    expect(typeof cpuInfo.cpumodel).toBe('string');
    expect(typeof cpuInfo.cpuLoad).toBe('object');
  });
});

describe('Memory Info', () => {
  it('should return Memory information with the correct types', async () => {
    const memInfo = await getMemInfo();
    expect(typeof memInfo.memtotal).toBe('number');
    expect(typeof memInfo.memfree).toBe('number');
  });
});

describe('System Info', () => {
  it('should return System information with the correct types', async () => {
    const sysInfo = await getSystemInfo();
    expect(typeof sysInfo.sysmanufacturer).toBe('string');
    expect(typeof sysInfo.sysmodel).toBe('string');
    expect(typeof sysInfo.sysversion).toBe('string');
  });
});
