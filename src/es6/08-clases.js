// Declarando
class User { }
// Creando instancia
//  -> const newUser = new User()

class user {
    // metodos
    greeting() {
        return 'Hello there'
    }
}

//const silentJassy = new user()
console.log(silentJassy.greeting())

// Constructor

class user {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario')
    }
    greeting() {
        return 'Hello there'
    }
}

const silentJassy = new user()



// This

class user {
    constructor(name) {
        this.name = name
    }
    // Metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana')
console.log(ana.greeting())


// Setters getters

class user {
    //Constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // Metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n
    }
}

const silentJassy2 = new user('Jassy', 24)
console.log(silentJassy2.uAge)
console.log(silentJassy2.uAge = 23)