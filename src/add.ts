const add = (numbers: string): number => {
  const convertedNumbers: number[] = numbers.split(',').map(number => Number(number));
  return convertedNumbers.reduce((sum, number) => sum += number, 0);
};

export default add;