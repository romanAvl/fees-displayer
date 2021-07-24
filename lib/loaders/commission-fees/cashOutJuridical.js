import { get } from 'https';

export default async () => {
  try {
    const feeInfo = await new Promise((res, rej) => {
      get('https://private-00d723-paysera.apiary-proxy.com/cash-out-juridical', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          res(JSON.parse(data));
        });
      }).on('error', (err) => {
        rej(err.message);
      });
    });

    return Promise.resolve(feeInfo);
  } catch (error) {
    return Promise.reject(error);
  }
};
