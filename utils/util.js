export const check = (item, query) => {
  const { date, desc, amount, status } = item;
  if (
    date.includes(query) ||
    desc.toLowerCase().includes(query) ||
    amount.toString().includes(query) ||
    status.includes(query)
  ) {
    return true;
  }
  return false;
};
