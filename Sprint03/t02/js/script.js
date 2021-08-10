class Timer {
    constructor(options) {
        this.title = options.title
        this.delay = options.delay
        this.stopCount = options.stopCount
    }
    start() {
        console.log("Timer " + this.title + " started (dealy=" + this.delay + ",  stopCount=" + this.stopCount + ")")
        this.end = this.stopCount
        this.timerId = setInterval(()=>this.tick(), this.delay)
    }
    tick() {
        this.end--
        console.log("Timer Bleep Tick! | cycles left " + this.end)
        if(this.end == 0) {
            this.stop()
        }
    }
    stop() {
        console.log("Timer Bleep stopped")
        clearInterval(this.timerId)
    }
}
function runTimer(id, delay, stopCount) {
    let my_timer = new Timer({
        title: id ,
        delay: delay ,
        stopCount: stopCount
    })  
    my_timer.start()
}

runTimer("Bleep", 1000, 5);
/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/