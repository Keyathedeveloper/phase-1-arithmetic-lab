function multiplyNumbers() {
    return num1 * num2;
}

let num1 = 2;
let num2 = 31;

let multiply = multiplyNumbers();
console.log(multiply);

function getRandomInteger() {
    return Math.floor(Math.random()* 100) + 1;
}

let random = getRandomInteger();
console.log(random);

function calculateRemainder() {
    return num3 % num4;
}

let num3 = 14;
let num4 = 5;
let mod = calculateRemainder(num3, num4);
console.log(mod);

function findMax(numbers) {
    return Math.max(...numbers);
}

let numbers = [5, 10, 15, 20];
let max = findMax(numbers);
console.log(max);
