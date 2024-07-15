// enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user, // => Antes era definir user: user
        age,
        country,
        uId
    }
}

console.log(newUser('SilentJassy', 24, 'MX', 1))