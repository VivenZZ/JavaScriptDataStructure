// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。

// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2

// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1

// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4

// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0

// 暴力解法
function getIndex(nums, target) {
    for(let i = 0; i < nums.length -1; i++) {
        if(target <= nums[i]) {
            return i;
        }
    }
    return nums.length
}
// 使用二分查找
function getIndex(nums, target) {
    // 二分查找首选定义 左右边界和中间量
    let left = 0,right = nums.length - 1; middle = 0;
    // 定义最后一次是 对比 是大于，则最终插入在中间数+1， 还是小于则插入在中间数。
    let pre = 0

    while(left <= right) {
        middle = Math.floor((left + right)/2);
        if(target === nums[middle]) {
            return middle
        } 
        else if( target > nums[middle]) {
            left = middle + 1
            pre = 1
        } 
        else {
            right = middle - 1
            pre = 0
        }
    }
    return middle + pre
}


console.log(getIndex([1,3,5,6], 5))
console.log(getIndex([1,3,5,6], 2))
console.log(getIndex([1,3,5,6], 7))
console.log(getIndex([1,3,5,6], 0))
