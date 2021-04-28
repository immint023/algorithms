/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 function findMinAbs(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = parseInt((right + left) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    }

    if (left === right) {
      break
    }

    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }

  let res;
  if (left > 0 && right <= arr.length - 1) {
    if (Math.abs(target - arr[mid]) < Math.abs(target - arr[mid - 1])) {
      res = arr[mid];
    } else {
      res = arr[mid - 1];
    }
  } else {
    if (Math.abs(target - arr[mid]) < Math.abs(target - arr[mid + 1])) {
      res = arr[mid];
    } else {
      res = arr[mid + 1];
    }
  }

  return res;
}

var minAbsoluteSumDiff = function(nums1, nums2) {
  let max = 0;
  let minIndex;
  let minAbsValue;

  let unsorted = [...nums1];
  nums1.sort((a, b) => a - b);

  for (let i = 0, length = nums2.length; i < length; i++) {
    const minAbs = findMinAbs(nums1, nums2[i]);
    if (minAbs !== null &&
      Math.abs(Math.abs(minAbs - nums2[i]) - Math.abs(unsorted[i] - nums2[i])) > max
    ) {
      max = Math.abs(Math.abs(minAbs - nums2[i]) - Math.abs(unsorted[i] - nums2[i]))
      minAbsValue = minAbs;
      minIndex = i;
    }
  }

  unsorted[minIndex] = minAbsValue;

  let total = 0;
  for (let i = 0, length = nums1.length; i < length; i++) {
    total += Math.abs(unsorted[i] - nums2[i]);
  }

  return total % (Math.pow(10, 9) + 7);
};