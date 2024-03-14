import { subtract } from "./print.mjs";
import isprime from 'isprime';

const result = subtract(7, 5);
const isPrime = isprime(7);
console.log(result);

console.log('Is 7 a prime number?', isPrime);