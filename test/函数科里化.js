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
function plx(...args) {
    if(args[0]) {
        console.log('args[0]', args[0]);
        sum*=args[0]
        return plx
    } else {
        console.log('args[1]', args[0]);
        return sum
    }
}
console.log(plx(2)(3)());
