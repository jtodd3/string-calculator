import { add } from './utils/add';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let response;
  // Use a loop to make sure we read all available data.
  while ((response = process.stdin.read()) !== null) {
    const sum = add(response);
    console.log(sum, 'sum');
  }
});