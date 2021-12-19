/* eslint-disable no-plusplus */
export default function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let best = scores[0];
  let worst = scores[0];
  const record = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (best < scores[i]) {
      best = scores[i];
      record[0] += 1;
    } else if (worst > scores[i]) {
      worst = scores[i];
      record[1] += 1;
    }
  }
  return record;
}
