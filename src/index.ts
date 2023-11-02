import http from 'http';
import url from 'url';
import { getSystemInfo, getMemInfo, getCpuInfo } from './sysInfo';

const port = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { pathname } = url.parse(req.url);

  if (pathname === '/api/v1/sysinfo') {
    const systemInfo = await getSystemInfo();
    const memInfo = await getMemInfo();
    const cpuInfo = await getCpuInfo();
    const ALLInfo = {
      systemInfo,
      memInfo,
      cpuInfo,
    };
    res.end(JSON.stringify(ALLInfo));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
