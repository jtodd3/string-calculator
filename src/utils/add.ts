export const add = (numbers: string, delimiter: string = ','): number => {
  const convertedNumbers: number[] = numbers.split(delimiter)
                                            .map(number => Number(number))
                                            .filter(number => number <= 1000);
  if (convertedNumbers.some((number => number < 0))) {
    const negativeNumbers = convertedNumbers.filter(number => number < 0);
    throw new Error(`Negatives not allowed. Negative numbers found: ${negativeNumbers.join(',')}`);
  }
  return convertedNumbers.reduce((sum, number) => sum += number, 0);
};
