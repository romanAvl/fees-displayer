import dJSON from 'dirty-json';
import { readFileSync, existsSync } from 'fs';

export default async (path = '') => {
  try {
    const finalData = await new Promise((res, rej) => {
      if (!path || !existsSync(path)) {
        rej(new Error('JSON file does not exist on given path'));
      }

      // read JSON file
      const rawData = readFileSync(path);

      // parse JSON file using 'dirty-json' module in the case of trailing commas
      const parsedData = dJSON.parse(rawData);

      res(parsedData);
    });

    return Promise.resolve(finalData);
  } catch (error) {
    return Promise.reject(error);
  }
};
