export default (amount = 0, fee = { amount: 0 }) => {
  if (!fee || !fee.amount) {
    return 0;
  }
  return amount > fee.amount ? fee.amount : amount;
};
