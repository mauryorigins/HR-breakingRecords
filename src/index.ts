/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
import breakingRecords from './breakingRecords';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  const result = breakingRecords(testArray);
  console.log('Result: ', result);
}

main();
