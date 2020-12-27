import {
  getTime, degreeHours, degreeMinutes,
} from './calculate';

describe('Get current time by offset', () => {
  const date = new Date(2020, 12, 12, 0, 0, 0);

  test('Offset 1 expect hours = 1', () => {
    expect(getTime(1, date).getHours()).toBe(1);
  });

  test('Offset 2 expect hours = 2', () => {
    expect(getTime(2, date).getHours()).toBe(2);
  });

  it('Offset 3.5 expect hours = 3 and minutes = 30', () => {
    const time = getTime(3.5, date);
    expect([time.getHours(), time.getMinutes()]).toEqual(expect.arrayContaining([3, 30]));
  });

  it('Offset -3.5 expect hours = 20 and minutes = 30', () => {
    const time = getTime(-3.5, date);
    expect([time.getHours(), time.getMinutes()]).toEqual(expect.arrayContaining([20, 30]));
  });
});

describe('Calculate degree hours by offset', () => {
  const date = new Date(2020, 12, 12, 0, 0, 0);

  test('Offset 0 expect degree = 0', () => {
    expect(degreeHours(0, date)).toBe(0);
  });

  test('Offset 1 expect degree = 30', () => {
    expect(degreeHours(1, date)).toBe(30);
  });

  test('Offset 2 expect degree = 60', () => {
    expect(degreeHours(2, date)).toBe(60);
  });

  test('Offset -1 expect degree = 30', () => {
    expect(degreeHours(-1, date)).toBe(330);
  });
});

describe('Calculate degree minutes by offset', () => {
  const date = new Date(2020, 12, 12, 0, 0, 0);

  test('Offset 0 expect degree = 0', () => {
    expect(degreeMinutes(0, date)).toBe(0);
  });

  test('Offset -0.1 expect degree = 324', () => {
    expect(degreeMinutes(-0.1, date)).toBe(54 * 6);
  });

  test('Offset 0.2 expect degree = 72', () => {
    expect(degreeMinutes(0.2, date)).toBe(12 * 6);
  });

  test('Offset 0.3 expect degree = 108', () => {
    expect(degreeMinutes(0.3, date)).toBe(18 * 6);
  });

  test('Offset 0.4 expect degree = 144', () => {
    expect(degreeMinutes(0.4, date)).toBe(24 * 6);
  });

  test('Offset 0.5 expect degree = 180', () => {
    expect(degreeMinutes(0.5, date)).toBe(30 * 6);
  });
});
