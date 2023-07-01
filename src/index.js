import {add} from './js/add';
import {subtract} from './js/subtract';
import {divide} from './js/divide';
import {printResult} from './js/printResult';
import {multiply} from './js/multiply';

let a = 10;
let b = 5;
let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);
printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);