const { sum, prod } = require('./sketch');

test('adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toBe(3);
});
test('multiplies 4 and 2 to equal 8', function() {
  expect(prod(4, 2)).toBe(3);
});