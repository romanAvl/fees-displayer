/* eslint-disable no-console */
import maxLimit from './limits/maxLimit';
import minLimit from './limits/minLimit';
import weekLimit from './limits/weekLimit';

export default function calculateRecursive(nextOperations = [], prevOperations = [], fees = {}) {
  // argument vadidation
  if (!Array.isArray(nextOperations) || !Array.isArray(prevOperations)) return Promise.reject(new Error('Wrong params! Check JSON file.'));

  // take first operation from list
  const currentOperation = nextOperations.shift();

  // operation display
  try {
    if (currentOperation) {
      // data declaration
      const { type, user_type: userType, operation } = currentOperation;
      const exactFee = fees[type][userType];

      // percentage calculation
      let finalAmount = operation.amount * (exactFee.percents / 100);

      // limits check
      if (exactFee.max) finalAmount = maxLimit(finalAmount, exactFee.max);
      else if (exactFee.min) finalAmount = minLimit(finalAmount, exactFee.min);
      else if (exactFee.week_limit) {
        finalAmount = weekLimit(exactFee, currentOperation, prevOperations);
      }

      // display result
      console.log((Math.ceil(finalAmount * 100) / 100).toFixed(2));

      // put operation into done list, if it was displayed properly
      prevOperations.push(currentOperation);
    }
  } catch (error) {
    console.log(`Can't calculate fees for ${JSON.stringify(currentOperation)}. Wrong data.`);
  }

  // move next
  if (nextOperations.length > 0) {
    return calculateRecursive(nextOperations, prevOperations, fees);
  }

  return Promise.resolve({ success: true });
}
