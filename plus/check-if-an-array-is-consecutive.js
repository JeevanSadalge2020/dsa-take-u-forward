function isConsecutive(nums) {
  let arr = [...new Set(nums)];
  if (arr.length !== nums.length) return false;
  let sorted_nums = arr.sort((a, b) => a - b);
  let lower_limit = Math.min(...sorted_nums);
  let upper_limit = lower_limit + arr.length - 1;
  return sorted_nums.every((num) => {
    if (num <= upper_limit && num >= lower_limit) return true;
    else return false;
  });
}

// Better approach

// function isConsecutive(nums) {
//   if (nums.length <= 1) return true;

//   nums.sort((a, b) => a - b);

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] - nums[i - 1] !== 1) {
//       return false;
//     }
//   }

//   return true;
// }
