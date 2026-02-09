var twoSum = function (nums, target) {
    const result = new Map();
    for (let i = 0; i <= nums.length; i++) {
        const complement = target - nums[i]
        if (result.has(complement)) {
            return [result.get(complement), i]
        } 
        result.set(nums[i], i)
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
