const user = { username: 'silentJassy', age: 24, country: 'MX' }
const { username, ...values } = user
console.log(username)
console.log(values)