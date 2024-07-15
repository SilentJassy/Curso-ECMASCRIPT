function newUser(name, age, country) {
    var name = name || 'Oscar'
    var age = age || 30
    var country = country || 'MX'
    console.log(name, age, country)
}

newUser()
newUser('Jassiel', 24, 'MX')



function newAdmin(name = 'Oscar', age = 30, country = 'MX') {
    console.log(name, age, country)
}
newAdmin()
newAdmin('Ana', 28, 'CA')