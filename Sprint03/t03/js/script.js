class Human {
    constructor(options) {
        this.firstName = options.firstName
        this.lastName = options.lastName
        this.gender = options.gender
        this.age = options.age || "hidden"
        this.calories = options.calories || 0
        this.status = "Everything fine"

        document.getElementById("fstName").innerHTML=this.firstName
        document.getElementById("ScndName").innerHTML=this.lastName
        document.getElementById("gender").innerHTML=this.gender
        document.getElementById("age").innerHTML=this.age
        document.getElementById("calor").innerHTML=this.calories

        this.updates()
    }
    updates() {
        this.hungry = setTimeout(() => {
            this.status = "I'm hungry!"
        }, 5000);
        this.update = setInterval(() => {
            document.getElementById("calor").innerHTML=this.calories
            document.getElementById("status").innerHTML=this.status
            if (this.calories < 500) {
                document.getElementById("SuprButton").disabled=true
            }
            else {
                document.getElementById("SuprButton").disabled=false
            }
        }, 1000 * 0.1)
        this.lose_cal = setInterval(() => {
            this.calories = this.calories - 200
            if(this.calories < 0) {
                this.calories = 0
            }
        }, 1000 * 60)
    }
    delete_upds() {
        clearInterval(this.hungry)
        clearInterval(this.update)
        clearInterval(this.lose_cal)
    }
    sleepFor() {
        this.status = "I'm sleeping"   
        document.getElementById("feed").disabled=true
        document.getElementById("sleep").disabled=true
        let sleep_secs = document.getElementById("sleep_secs").value

        setTimeout(() => {
            this.status = "I'm awake now"
            document.getElementById("feed").disabled=false
            document.getElementById("sleep").disabled=false
        }, 1000 * sleep_secs) 
    }
    feed() {
        if(this.calories > 500) {
            this.status = "I'm not hungry"
            return
        }
        this.status = "Nom nom nom"
        document.getElementById("sleep").disabled=true
        document.getElementById("feed").disabled=true

        setTimeout(() => {
            this.calories += 200
            document.getElementById("sleep").disabled=false
            document.getElementById("feed").disabled=false
            if(this.calories < 500) {
                this.status = "I'm still hungry"
            }
        }, 1000 * 10) 
    }
}
class Superhero extends Human {
    constructor(options) {
        super(options)
        this.delete_upds()
        this.status_s = "Everything fine"

        document.getElementById("fstName_s").innerHTML=this.firstName
        document.getElementById("ScndName_s").innerHTML=this.lastName
        document.getElementById("gender_s").innerHTML=this.gender
        document.getElementById("age_s").innerHTML=this.age
        document.getElementById("calor_s").innerHTML=this.calories

        this.updates_s()
    }
    updates_s() {
        this.update = setInterval(() => {
            document.getElementById("calor_s").innerHTML=this.calories
            document.getElementById("status_s").innerHTML=this.status_s
        }, 1000 * 0.1)
        this.lose_cal = setInterval(() => {
            this.calories = this.calories - 200
            if(this.calories < 0) {
                this.calories = 0
            }
        }, 1000 * 60)
    }
    fly() {
        this.status_s = "I'm flying!"

        document.getElementById("sleep_s").disabled = true
        document.getElementById("feed_s").disabled = true
        document.getElementById("fight_s").disabled = true
        document.getElementById("fly_s").disabled = true

        setTimeout(() => {
            document.getElementById("sleep_s").disabled = false
            document.getElementById("feed_s").disabled = false
            document.getElementById("fight_s").disabled = false
            document.getElementById("fly_s").disabled = false
            this.SuprButton = "Everything fine"
        }, 1000 * 10)
    }

    fightWithEvil() {
        document.getElementById("sleep_s").disabled = true
        document.getElementById("feed_s").disabled = true
        document.getElementById("fight_s").disabled = true
        document.getElementById("fly_s").disabled = true
        this.status_s = "Khhhh-chh... Bang-g-g-g... Evil is defeated!"
        setTimeout(() => {
            document.getElementById("sleep_s").disabled = false
            document.getElementById("feed_s").disabled = false
            document.getElementById("fight_s").disabled = false
            document.getElementById("fly_s").disabled = false
            this.status_s = "Everything fine"
        }, 1000 * 5)
    }

    sleepFor() {
        this.status_s = "I'm sleeping"   
        document.getElementById("sleep_s").disabled = true
        document.getElementById("feed_s").disabled = true
        document.getElementById("fight_s").disabled = true
        document.getElementById("fly_s").disabled = true
        let sleep_secs_s = document.getElementById("sleep_secs_s").value

        setTimeout(() => {
            this.status_s = "I'm awake now"
            document.getElementById("sleep_s").disabled = false
            document.getElementById("feed_s").disabled = false
            document.getElementById("fight_s").disabled = false
            document.getElementById("fly_s").disabled = false
            this.status_s = "Everything fine"
        }, 1000 * sleep_secs_s) 
    }

    feed() {
        this.status_s = "Nom nom nom"
        document.getElementById("sleep_s").disabled = true
        document.getElementById("feed_s").disabled = true
        document.getElementById("fight_s").disabled = true
        document.getElementById("fly_s").disabled = true
        setTimeout(() => {
            this.calories += 200
            document.getElementById("sleep_s").disabled = false
            document.getElementById("feed_s").disabled = false
            document.getElementById("fight_s").disabled = false
            document.getElementById("fly_s").disabled = false
            this.status_s = "Everything fine"
        }, 1000 * 10) 
    }
}
function Upgrade(waiting_human) {

    zhdun = new Superhero({
        firstName: waiting_human.firstName,
        lastName: waiting_human.lastName,
        gender: waiting_human.gender,
        age: waiting_human.age,
        calories: waiting_human.calories
    })   
    document.getElementById("superhero").style.display = "block"
    document.getElementById("normal_human").style.display = "none"
}
waiting_human = new Human({
    firstName: prompt("Enter the First Name of human"),
    lastName: prompt("Enter the Last Name of human"),
    gender: prompt("Enter the Gender of human"),
    age: Number(prompt("Enter the Age of human")),
    calories: Number(prompt("Enter the Number of Started Calories of human"))
})