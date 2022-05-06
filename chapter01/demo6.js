// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。


function getMinArr(nums, s) {
    var i = 0; // 定义初始位置
    var j = 0; // 定义步长
    var len = nums.length;
    while(i < len - j) {
        let addNum = 0
        for (let index = i; index <= i + j; index++) {
            addNum += nums[index]
        }
        if(addNum >= s) {
            return j+1
        }
        i++
        if(i === len - j) {
            j++
            i = 0
        }
    }
    return 0
}

console.log(getMinArr([2,3,1,2,4,3], 15))
console.log(getMinArr([2,3,1,2,4,3], 7))
console.log(getMinArr([1,3,3], 3))