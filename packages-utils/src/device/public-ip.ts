interface IIpServiceResponse {
  ip?: string;
  query?: string;
  ipAddress?: string;
  origin?: string;                    // httpbin.org 使用 origin 字段
  country?: string;
  country_name?: string;
  region?: string;
  city?: string;
}

/**
 * 📡 网络信息
 */
export default async function publicIp(): Promise<string> {

  // 使用多个IP查询服务，提高成功率
  // 优先使用官方和稳定的服务
  const ipServices = [
    "https://api.ipify.org?format=json",           // 官方服务，稳定可靠
    "https://ipapi.co/json/",                      // 官方 API，功能丰富
    "https://ipinfo.io/json",                      // 官方服务，数据准确
    "https://api.ip.sb/geoip",                     // 开源项目，稳定
    "https://httpbin.org/ip"                      // 官方测试服务
  ];

  let ipData = null;

  let lastError = null;

  // 尝试每个服务
  const fetchService = async (service: string): Promise<IIpServiceResponse> => {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(service, {
        method: "GET",
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      clearTimeout(timeoutId);

      throw error;
    }
  };

  // 按顺序尝试每个服务，成功即停止
  for (const service of ipServices) {
    try {
      // eslint-disable-next-line no-await-in-loop
      ipData = await fetchService(service);

      break;
    } catch (error) {
      lastError = error;

      continue;
    }
  }

  if (ipData) {

    // 根据不同服务的响应格式提取IP
    let ip = "";

    let location = "";

    const {
      ip: ipFromData,
      query,
      ipAddress,
      origin
    } = ipData;

    if (ipFromData) {
      ip = ipFromData;
    } else if (query) {
      ip = query;
    } else if (ipAddress) {
      ip = ipAddress;
    } else if (origin) {
      ip = origin;
    }

    // 提取位置信息
    if (ipData.country) {
      location = ipData.country;

      if (ipData.region) {
        location += `, ${ipData.region}`;
      }

      if (ipData.city) {
        location += `, ${ipData.city}`;
      }
    } else if (ipData.country_name) {
      location = ipData.country_name;

      if (ipData.region) {
        location += `, ${ipData.region}`;
      }

      if (ipData.city) {
        location += `, ${ipData.city}`;
      }
    }

    if (ip) {
      return location ? `${ip} (${location})` : ip;
    }

    throw new Error("无法解析IP地址");

  } else {
    throw lastError || new Error("所有IP查询服务都失败了");
  }
}
