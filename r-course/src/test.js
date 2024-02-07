let fruit = [1, 2, 3, 4, 5]
console.log(...fruit);


for (let res of fruit) {
    console.log(res)
}


let fruits = { 1: "app", 2: "bana" }
const aaa = { ...fruits }
console.log(aaa);


for (let res in fruits) {
    console.log(fruits[res]);
}


const num = [1, 2, 3, 4, 5]
const sum = num.filter((n) => n >= 3).map((n) => {
    return n * 2;
})
console.log(sum);


const add = num.map((a) => {
    return a + 5;
}).filter((a) => a >= 6)
console.log(add);


const numbers = [1, 2, 3, 4, 5];
const sumOf = numbers.reduce((a, b) => {
    return a + b;
});
console.log(sumOf); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

var a = 10
var b = 20
let t;
t = a; // Store the value of 'a' in 't'
a = b; // Assign the value of 'b' to 'a'
b = t; // Assign the value stored in 't' to 'b'

console.log("a:" + a, "b:" + b);


var a = 10
var b = 20

a = a + b;  // Now, a = 30
b = a - b;  // Now, b = 30 - 20 = 10
a = a - b;  // Now, a = 30 - 10 = 20
console.log("a:" + a, "b:" + b);


const ab = ["a", "b", "c"]
const cd = ["d", "e", "f"]

const ij = { a: 1, b: 2, c: 3 }
const kl = { d: 4, e: 5, f: 6 }

const ef = [...ab, ...cd]
const gh = { ...ij, ...kl }

console.log(ef);
console.log(gh);
console.log(...ab);


const str = "RRGGR"
const findMinSteps = (string) => {
    if (string) {
        let redCount = 0
        let greenCount = 0

        for (let index = 0; index < string.length; index++) {
            const element = string[index];
            if (element == 'R') {
                redCount++
            } else {
                greenCount++
            }
        }
        return Math.min(redCount, greenCount)
    }
}
console.log("min count;" + findMinSteps(str));


const ABS = "SHE LOOKS SHY"
const forMaxCount = (value) => {
    if (value) {
        let a = 0
        let b = 0

        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            if (element == 'S') {
                a++
            } else {
                b++
            }
        }
        return Math.max(a,b)
    }
}
console.log("Max count:" + forMaxCount(ABS));
