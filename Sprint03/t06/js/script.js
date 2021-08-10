(function t06() {
    let summ = 1
    while(true) {
        let num = Number(prompt("Previous result: " + summ + 
                        ". Enter a new number: "))
        if(isNaN(num)) {
            console.error("Invalid Number!")
            continue
        }
        summ+=num
        if(summ > 10000) {
            summ = 1
        }
    }
})();