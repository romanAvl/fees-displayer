import parseJSON from '../json/parseJSON';
import summaryCommFees from '../../loaders/commission-fees/summaryCommFees';
import calculateRecursive from './calculateRecursive';

export default async (path = '') => {
  try {
    // extract data from JSON file
    const operations = await parseJSON(path);

    // get commission fee data
    const fees = await summaryCommFees();

    // display calculated fees
    await calculateRecursive(operations, [], fees);

    return Promise.resolve({ success: true });
  } catch (error) {
    return Promise.reject(error);
  }
};
