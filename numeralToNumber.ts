import { stringToNumber } from './utils/stringToNumber';

export const numeralToNumber = (str: string): number => {
  let millions = 0;
  let thousands = 0;
  let runningTotal = 0;

  const arrayOfNumerals: string[] = str.split(/[- ,]/);

  arrayOfNumerals.forEach((numeral: string) => {
    const lowerCaseNumeral = numeral.toLowerCase();

    const numeralAsNumber = stringToNumber(lowerCaseNumeral);

    if (numeralAsNumber === 1000000) {
      millions = runningTotal * numeralAsNumber;
      runningTotal = 0;
    } else if (numeralAsNumber === 1000) {
      thousands = runningTotal * numeralAsNumber;
      runningTotal = 0;
    } else if (numeralAsNumber === 100) {
      runningTotal *= numeralAsNumber;
    } else runningTotal += numeralAsNumber;
  });

  const finalTotal = millions + thousands + runningTotal;
  return finalTotal;
};
