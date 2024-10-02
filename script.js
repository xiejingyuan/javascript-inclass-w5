// 1

let getCelsius = f => (f-32) * 5 / 9
console.log(getCelsius(75))

// 2

function minMax(nums) {
    return {min: Math.min(...nums), max: Math.max(...nums)}
}
console.log(minMax([1, 2, 3, 4, 5]));

// 3
(function(length, width) {
    let area = length * width;
    console.log(`The area of the rectangle with length ${length} and width ${width} is ${area}.`);
})(5, 3);

