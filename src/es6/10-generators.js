function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Jassy', 'Oscar', 'Ulises', 'Eduardo'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)