import displayHealthLevel from '../basic';

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'мечник', health: 40, expected: 'wounded' },
  { name: 'лучник', health: 10, expected: 'critical' }
])(
  ('returns $expected for $name with $health'),
    ({ name, health, expected }) => {
      expect(displayHealthLevel({ name, health })).toBe(expected);
  });