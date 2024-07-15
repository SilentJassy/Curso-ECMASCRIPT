// Arrays destructuring

let fruits = ['Apple', 'Banana', 'Orange']
let [a, b, c] = fruits

//console.log(a, b, c)

console.log(a, fruits[1])


// Object destructuring

let user = { username: 'Oscar', age: 34 }
let { username, age } = user

console.log(username, user.age)


// Spread Operator

let person = { name: 'Jassiel', age: 24 }
let country = 'MX'

let data = { id: 1, ...person, country }
console.log(data)


// Rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[2])
    //return num + values[0]
}
sum(1, 1, 2, 3, 4, 5)
