/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let left = 1;
  let right = Math.min(...ranks) * cars * cars; // 100

  const canRepairAll = (time) => {
    let totalCarRepaired = 0;
    for (rank of ranks) {
      totalCarRepaired += Math.floor(Math.sqrt(time / rank));
      if (totalCarRepaired >= cars) return true;
    }
    return false;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRepairAll(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
};

// test case
console.log(repairCars([4, 2, 3, 1], 10));
