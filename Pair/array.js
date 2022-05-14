let arr = [1, 2, 3, 4, 4, 3, 2, 2, 5]
let one = arr.reduce(function(sum, current) {
    if (current === 8) {
        sum += 1;
    }
    return sum
}, 0)

console.log(one)