import { sum } from './utils/math';

const main = (): void => {
  // Get command line arguments (excluding the first two default args)
  const args = process.argv.slice(2);

  // Log entered arguments
  console.log(`Entered arguments: ${args.join(', ')}`);

  // Convert arguments to numbers and filter out any non-numeric inputs
  const numbers = args.map(arg => parseFloat(arg)).filter(num => !isNaN(num));

  if (numbers.length === 0) {
    console.log('No valid numbers provided.');
    return;
  }

  // Calculate the sum using the sum function
  const result = sum(numbers);

  console.log(`The sum is: ${result}`);
};

main();
