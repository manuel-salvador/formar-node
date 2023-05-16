function range_vision(n) {
  const digits = n
    .toString()
    .split('')
    .map((item) => Number(item));

  const hasDigitOne = digits.includes(1);

  if (!hasDigitOne) return false;

  const sums = [];
  const sumsDigitOne = [];

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i];
    const currentSum = [];

    for (let j = 1; j <= currentDigit; j++) {
      const element = digits[i + j];
      if (element === undefined) break;
      currentSum.push(element);
    }

    for (let k = 1; k <= currentDigit; k++) {
      const element = digits[i - k];
      if (element === undefined) break;
      currentSum.push(element);
    }

    const totalCurrentSum = currentSum.reduce((total, number) => total + number, 0);

    if (currentDigit === 1) {
      sumsDigitOne.push(totalCurrentSum);
    } else {
      sums.push(totalCurrentSum);
    }
  }

  const minSum = Math.min(...sums);
  const minSumDigitOne = Math.min(...sumsDigitOne);

  return minSumDigitOne <= minSum;
}

console.log(range_vision(34315));
