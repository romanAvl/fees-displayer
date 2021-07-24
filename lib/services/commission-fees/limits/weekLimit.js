export default (
  fee = { week_limit: { amount: 0 }, percents: 0 },
  currentOperation = { date: '2007-01-01', operation: { amount: 0 } },
  prevOperations = [],
) => {
  const {
    date,
    user_id: userId,
    type,
    operation: operationCash,
  } = currentOperation;

  // get week range
  const today = new Date(date);
  let firstDay = today.getDay();
  if (!firstDay) firstDay = today.getDate() - today.getDay() - 6;
  else firstDay = today.getDate() - today.getDay() + 1;
  const thisWeekMonday = new Date(today.setDate(firstDay));
  const thisWeekSunday = new Date(today.setDate(today.getDate() + 6));

  // calculate week summary
  const thisWeekSum = prevOperations.reduce((totalCash, operation) => {
    if (
      operation.user_id === userId
      && operation.type === type
      && new Date(operation.date) >= thisWeekMonday
      && new Date(operation.date) <= thisWeekSunday
      && operation.operation
    ) {
      return totalCash + operation.operation.amount;
    }
    return totalCash;
  }, operationCash.amount);

  // update final_amount
  if (thisWeekSum > fee.week_limit.amount) {
    const tempAmount = thisWeekSum - fee.week_limit.amount;
    if (tempAmount < operationCash.amount) return tempAmount * (fee.percents / 100);
  } else return 0;

  return operationCash.amount * (fee.percents / 100);
};
