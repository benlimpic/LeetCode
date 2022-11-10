// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let outer = [];
  let line = [1]
  for (let i = 0; i < numRows; i++) {
    let temp = []
    outer.push(line);
      for (let j = 0; j < line.length; j++) {
        if(line[j + 1] !== undefined) {
          temp.push(line[j] + line[j + 1])
        }
        else {temp.push(line[j] + 0)}
      }
    line = [1, ...temp]
  }
  return outer
};