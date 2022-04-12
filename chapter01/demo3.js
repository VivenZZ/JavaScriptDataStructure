// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 进阶：你可以设计并实现时间复杂度为 $O(\log n)$ 的算法解决此问题吗？

// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 示例 2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]

// 暴力算法
function getIndex(nums, target) {
    let i = j = -1;
    for (let k = 0; k < nums.length; k++) {
        if(target === nums[k]) {
            i === -1 ? i = j = k : j = k;
        }
    }
    // 没找到返回
    return [i,j];
}

// 有序的 试试用二分查找

function getIndex(nums, target) {
    // 获取右边界的值
    let rightIndex = getRightIndex(nums, target);
    // 获取左边界的值
    let leftIndex = getLeftIndex(nums, target);

    // 产生边界情况
    if(rightIndex !== -1 && leftIndex === -1) leftIndex = rightIndex
    if(leftIndex !== -1 && rightIndex === -1) rightIndex = leftIndex
    if(leftIndex > rightIndex) leftIndex = rightIndex = -1
    if(nums[nums.length -1] === target &&  nums[0] === target) {
        leftIndex = 0
        rightIndex = nums.length - 1
    }
    return [leftIndex, rightIndex]
}
function getRightIndex(nums, target) {
    // 只有当前target 小于 middle值的时候 才会更新right值
    let left = 0,right = nums.length - 1, middle = 0;
    // 定义边界值
    let border = -1;
    while (left <= right) {
        middle = Math.floor((left + right)/2);
        if(target >= nums[middle]) {
            // 目标值大于等于中间值，则将左标记 移到 middle+1
            left = middle + 1;
        } else {
            // 目标值小于中间值，则确定了右边标记
            border = right = middle -1;
        }
    }
    return border;
}
function getLeftIndex(nums, target) {
    // 只有当前target 大于 middle值的时候 才会更新left值
    let left = 0,right = nums.length - 1, middle = 0;
    // 定义边界值
    let border = -1;
    while (left <= right) {
        middle = Math.floor((left + right)/2);
        if(target <= nums[middle]) {
            // 目标值小于等于中间值，则将右标记 移到 middle-1
            right = middle - 1;
        } else {
            // 目标值大于中间值，则确定了左边标记
           border =  left = middle + 1;

        }
        
    }
    return border;
}

console.log(getIndex([5,7,7,8,8,10], 8))
console.log(getIndex([5,7,7,8,8,10], 9))
console.log(getIndex([5,7,7,8,8,10], 5))
console.log(getIndex([5,7,7,8,8,10], 0))