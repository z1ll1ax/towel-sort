
module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let new_arr = []
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 !== 0) matrix[i] = matrix[i].reverse();
    matrix[i].forEach(element => {
      new_arr[new_arr.length] = element;
    });
  }
  return new_arr;
}
