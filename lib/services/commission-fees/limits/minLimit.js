export default (amount = 0, fee = { amount: 0 }) => {
  if (!fee || !fee.amount) {
    return amount;
  }
  return amount < fee.amount ? fee.amount : amount;
};
