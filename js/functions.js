// Задание 1
const checkLength = (inputString, maxLength) => {
  const result = inputString.length <= maxLength;
  return result;
};
checkLength('проверяемая строка', 10);

// Задание 2
const checkPalindrome = function (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0 ; i--) {
    const index = normalizedString[i];
    newString += index;
  }
  return newString === normalizedString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

// Задание 3
function extractDigits(input) {
  if (typeof input === 'number') {
    input = input.toString();
  }

  let result = '';

  for (let i = 0; i < input.length; i++) {
    const digit = parseInt(input[i], 10);
    if (!Number.isNaN(digit)) {
      result += digit;
    }
  }

  if (result === '') {
    return NaN;
  }

  return parseInt(result, 10);
}
extractDigits(1.5);
// console.log(extractDigits(1.5)); // 15
// console.log(extractDigits('2023 год')); // 2023
// console.log(extractDigits('агент 007')); // 7
// console.log(extractDigits('а я томат')); // NaN
// console.log(extractDigits(-1)); // 1
// console.log(extractDigits(2023)); // 2023
// console.log(extractDigits('ECMAScript 2022')); // 2022
// console.log(extractDigits('22a4b5')); // 2245
// console.log(extractDigits('1 кефир, 0.5 батона')); // 105
// console.log(extractDigits('abc')); // NaN
// console.log(extractDigits('')); // NaN
