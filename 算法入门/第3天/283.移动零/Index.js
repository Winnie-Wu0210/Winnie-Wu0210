var moveZeroes = function(nums) {
  let left = 0
  let right = nums.length-1
  while(left <= right) {
    if(nums[left] == 0) {
      nums.splice(left, 1)
      nums.push(0)
      right--
    }else {
      left++
    }
  }
  return nums
};

var nums = [0]
console.log(moveZeroes(nums))