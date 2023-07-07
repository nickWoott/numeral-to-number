import { numeralToNumber } from './numeralToNumber';

describe('numeralToNumber', () => {
  test('Should return a number', () => {
    const result = numeralToNumber('');
    expect(typeof result).toBe('number');
  });
  test('returns a single digit number', () => {
    expect(numeralToNumber('five')).toBe(5);
    expect(numeralToNumber('ten')).toBe(10);
  });

  test('returns a multiple digit number', () => {
    expect(numeralToNumber('sixty nine')).toBe(69);
    expect(numeralToNumber('forty nine thousand')).toBe(49000);
  });

  test('correctly returns numbers seperated by -', () => {
    expect(numeralToNumber('two-hundred-and-seven')).toBe(207);
    expect(numeralToNumber('five-hundred-and-seventy-two-thousand')).toBe(
      572000
    );
  });
  test('correctly returns numbers seperated by - or spaces', () => {
    expect(numeralToNumber('one thousand-and-three')).toBe(1003);
    expect(numeralToNumber('two thousand and-twelve')).toBe(2012);
  });
  test('handles capitalisation', () => {
    expect(numeralToNumber('FORTY THOUSAND')).toBe(40000);
    expect(numeralToNumber('SIX-HUNDRED-THOUSAND-AND-ONE')).toBe(600001);
  });

  test('works for a variety of inputs', () => {
    expect(
      numeralToNumber(
        'two HUndred and seventy Five thousand, six hundred and two'
      )
    ).toBe(275602);
    expect(numeralToNumber('OnE MIllion')).toBe(1000000);
    expect(numeralToNumber('-nine-')).toBe(9);
  });

  test('should return NaN when passed invalid input', () => {
    expect(numeralToNumber('three is not a number')).toBe(NaN);
    expect(numeralToNumber('fdasgfsdf')).toBe(NaN);
    expect(numeralToNumber('!@#$%^&*!(&)()_+')).toBe(NaN);
  });
});
