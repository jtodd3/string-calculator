import { add } from './utils/add';

const NEWLINE_CHARACTER = '\\n';

const getDelimiter = (inputString: string, controlCharacter: string = '//', endOfDelimiter: string = NEWLINE_CHARACTER): string[] => {
  const controlCodeIndex = inputString.indexOf(controlCharacter) + controlCharacter.length;
  const endOfDelimiterIndex = inputString.indexOf(endOfDelimiter);
  const delimiterString = inputString.slice(controlCodeIndex, endOfDelimiterIndex);
  if (delimiterString.length > 1) {
    return delimiterString.split(',');
  } else {
    return [delimiterString];
  }
}

const getStringOfNumbers = (inputString: string, endOfDelimiter: string = NEWLINE_CHARACTER): string => {
  const endOfDelimiterIndex = inputString.indexOf(endOfDelimiter) + endOfDelimiter.length;
  return inputString.slice(endOfDelimiterIndex);
}

export const calculateSumFromInput = (inputString: string): number => {
  let sum;
  if (inputString.includes('//')) {
    const delimiter = getDelimiter(inputString);
    const numbers = getStringOfNumbers(inputString);
    sum = add(numbers, delimiter);
  } else {
    sum = add(inputString);
  }
  return sum;
}


process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let response: string;
  // Use a loop to make sure we read all available data.
  while ((response = process.stdin.read()) !== null) {
    const sum = calculateSumFromInput(response);
    console.log(sum, 'sum');
  }
});
