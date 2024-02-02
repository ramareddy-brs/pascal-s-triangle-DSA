function generatePascalsTriangle(numRows) {
  if (numRows <= 0) {
      return [];
  }

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
      const row = [1];

      for (let j = 1; j < i; j++) {
          row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }

      row.push(1);
      triangle.push(row);
  }

  return triangle;
}

// Example usage:
const numRows = 5;
const result = generatePascalsTriangle(numRows);
console.log(result);