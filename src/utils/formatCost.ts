export const formatCost = (money?: number, precision: number = 3) => {
  if (!money) {
    return "$0";
  }
  if (money === 0) {
    return "$0";
  }
  // if money is less than input precision, return < precision
  if (money < Math.pow(10, -precision)) {
    return `<$${Math.pow(10, -precision)}`;
  }
  return `$${parseFloat(money.toFixed(precision))}`;
};
