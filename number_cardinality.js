function number_cardinality(n) {
  const lastDigit = n.toString().slice(-1);
  if (lastDigit === '0') return 'zero';
  if (lastDigit === '5') return 'five';

  const isEven = n % 2 === 0;
  if (isEven) return 'even';
  else return 'odd';
}
