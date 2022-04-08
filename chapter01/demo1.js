/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ,
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
*/

// 暴力算法：直接循环遍历找到下标，over。
let nums = [1,2,3,4,55,56,77,89,122,333];
function getIndex(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(target === nums[i]){
            return i;
        }
    }
    return -1;
}

// 使用2分查找
function getIndex(nums, target) {
    // 二分查找 需要定义两个边界 和一个中间数
    let left = 0,right = nums.length-1,middle = 0;
    // 进入while循环,当left<=right的时候[left,right] ，target值可以在其中，否则退出循环。
    while(left <= right) {
        // 定义middle的值。
        middle = Math.floor((left + right)/2);
        // 判断nums[midlle]和目标值target的大小，
        // 如果target大于nums[middle]则 target在middle + 1 和right之间
        // 如果target小于nums[middle]则 target在left和middle-1之间
        // 如果相等则返回middle
        if(target === nums[middle]) {
            return middle;
        }
        else if(target > nums[middle]) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    // 条件循环结束没有找到则返回-1
    return -1

}

console.log(getIndex(nums, 2));
console.log(getIndex(nums, 1));
console.log(getIndex(nums, 56));
console.log(getIndex(nums, 333));
console.log(getIndex(nums, 334));
