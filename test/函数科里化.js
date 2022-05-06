// 累乘

function mp(...x) {
    let arg = Array.from(x)
    let a = arg.reduce(function(i,j){
       return i*j
    },1)
    return a
}
// console.log(mp(1,2,5,8,9));

// 科里化
function pl(x) {
    return function(y) {
        return x * y
    }
}
// console.log(pl(2)(3))

// 科里化累乘
    let sum = 1
function plx(nums) {
    if(nums) {
        sum*=nums
        return plx
    } else {
        return sum
    }
}
console.log(plx(2)(9)(9)(9)(9)());
