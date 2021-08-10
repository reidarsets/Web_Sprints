let validator = {
    get(target, property) {
        console.log(`Trying to access the property '${property}'...`)
        if(property in target) {
            return target[property]
        }
        else {
            return false
        }
    },

    set(target, property, value) {
        if (value < 0 || value > 200) {
            console.log('Uncaught RangeError: The age is invalid')
            return false
        }
        if (!Number.isInteger(value) && property == 'age') {
            console.log('Uncaught TypeError: The age is not an integer')
            return false
        }
        console.log(`Setting value '${value}' to '${property}'`)
        return target[property] = value
    }
}


let person = new Proxy({}, validator)
person.age = 100
// Setting value '100' to 'age'
console.log(person.age)
// Trying to access the property 'age'...
// 100
person.gender = "male"
// Setting value 'male' to 'gender' 
person.age = 'young'
// Uncaught TypeError: The age is not an integer
person.age = 300
// Uncaught RangeError: The age is invalid
