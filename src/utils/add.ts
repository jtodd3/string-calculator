const getRegExpFromDelimiter = (delimiter: string): string => {
  return delimiter.split('').reduce((regex, char) => {
    regex += `\\${char}`;
    return regex;
  }, '');
}

const getDelimiterRegex = (delimiters: string[]): RegExp => {
  const delimitersJoined =  delimiters.map(delimiter => getRegExpFromDelimiter(delimiter)).join('|');
  return new RegExp(delimitersJoined, "g");
}

export const add = (numbers: string, delimiter: string[] | string = ','): number => {
  const delimiterArray = Array.isArray(delimiter) ? delimiter : [delimiter];
  const delimiterRegex = getDelimiterRegex(delimiterArray);
  const convertedNumbers: number[] = numbers.split(delimiterRegex)
                                            .map(number => Number(number))
                                            .filter(number => number <= 1000);
  if (convertedNumbers.some((number => number < 0))) {
    const negativeNumbers = convertedNumbers.filter(number => number < 0);
    throw new Error(`Negatives not allowed. Negative numbers found: ${negativeNumbers.join(',')}`);
  }
  return convertedNumbers.reduce((sum, number) => sum += number, 0);
};
