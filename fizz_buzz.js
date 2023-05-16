function fizz_buzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let dato = '';
    if (i % 3 == 0) dato += 'Fizz';
    if (i % 5 == 0) dato += 'Buzz';
    result.push(dato || i);
  }
  return result;
}
