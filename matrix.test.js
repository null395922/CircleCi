const Matrix = require('./matrix');

test('adding scalar to matrix', () => {
    var a = new Matrix(3, 3);
    a.data[0] = [1, 2, 3];
    a.data[1] = [4, 5, 6];
    a.data[2] = [7, 8, 9];
    a.add(1);

    expect(a).toEqual({
      rows: 3,
      cols: 3,
      data: [
        [2,3,4],
        [5,6,7],
        [8,9,10]
      ]
    });
  });