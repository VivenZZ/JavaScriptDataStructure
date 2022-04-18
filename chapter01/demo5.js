// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

// 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]


// 暴力算法 平方后 排序
function solution1(nums) {
    // 返回新数组
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }       
    nums.sort((a,b) => a - b)
    return nums
}

// 双指针算法
// 定义一个空数组，因为数组初始状态是有序 递增的。所有只要对比两边的平方后大小，
// 左边位置和右边位置的平方后的对比，哪边大哪个就放入新的数组第nums.length -1 的位置。
// 最后改变新的数组最大位置递减。
function solution(nums) {
    var i = 0;
    var j = nums.length - 1;
    var k = j
    var result = []
    while(i <= j) {
        if(nums[i]* nums[i] < nums[j] * nums[j]) {
            result[k--] = nums[j]* nums[j];
            j--;
        } else {
            result[k--] = nums[i] * nums[i];
            i++;
        }
    }
    return result;
}

console.log(solution([-4,-1,0,3,10]));
console.log(solution([-7,-3,2,3,11]));