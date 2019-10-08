export const add = (numbers: string, delimiter: string = ','): number => {
  const convertedNumbers: number[] = numbers.split(delimiter)
                                            .map(number => Number(number))
                                            .filter(val => !isNaN(val));
  return convertedNumbers.reduce((sum, number) => sum += number, 0);
};
