function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function decimalToFraction(decimal: number): string {
  if (decimal === 0) return "0:1";
  if (decimal === 1) return "1:0";

  // Handling repeating decimals
  // const epsilon = 1e-9;
  // if (Math.abs(decimal - 0.3333333) < epsilon) return "1:2";
  // if (Math.abs(decimal - 0.6666667) < epsilon) return "2:1";

  // Convert to fraction
  const denominator = 1000000; // Arbitrary large denominator
  const numerator = Math.round(decimal * denominator);

  // Reduce fraction
  const divisor = gcd(numerator, denominator);
  const reducedNumerator = numerator / divisor;
  const reducedDenominator = denominator / divisor;

  // Format the fraction as a ratio
  return `${reducedNumerator}:${reducedDenominator - reducedNumerator}`;
}

// Test cases
// console.log(decimalToFraction(0)); // Output: 0:1
// console.log(decimalToFraction(0.25)); // Output: 1:3
// console.log(decimalToFraction(0.3333333)); // Output: 1:2
// console.log(decimalToFraction(0.5)); // Output: 1:1
// console.log(decimalToFraction(0.6666667)); // Output: 2:1
// console.log(decimalToFraction(0.75)); // Output: 3:1
// console.log(decimalToFraction(1)); // Output: 1:0

export default decimalToFraction;
