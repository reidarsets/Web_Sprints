class Calculator {
    constructor(num) {
        this.result = num
    }
    init(num) {
        this.result = num
        return this
    }
    alert() {
        function alert_delay(num) {
            alert(num)
        }
        setTimeout(alert_delay, 5000, this.result)
    }
    add(num) {
        if (this.result === undefined) {
            this.result = num
        }
        else {
            this.result += num
        }
        return this
    }
    sub(num) {
        if (this.result === undefined) {
            this.result = num
        }
        else {
            this.result -= num
        }
        return this
    }
    mul(num) {
        if (this.result === undefined) {
            this.result = num
        }
        else {
            this.result *= num
        }
        return this
    }
    div(num) {
        if (this.result === undefined) {
            this.result = num
        }
        else {
            this.result /= num
        }
        return this
    }
}