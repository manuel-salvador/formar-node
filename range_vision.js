function range_vision(n) {
  const digits = n
    .toString()
    .split('')
    .map((item) => Number(item));

  const hasDigitOne = digits.includes(1);

  if (!hasDigitOne) return false;

  let sumDigitOne;
  let sumNoDigitOne;

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

    if (currentDigit === 1 && (sumDigitOne === undefined || sumDigitOne > totalCurrentSum)) {
      sumDigitOne = totalCurrentSum;
    } else if (sumNoDigitOne === undefined || sumNoDigitOne > totalCurrentSum) {
      sumNoDigitOne = totalCurrentSum;
    }
  }

  return sumDigitOne === sumNoDigitOne;
}
