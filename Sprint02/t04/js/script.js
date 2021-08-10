function checkDivision(beginRange='1', endRange='100') {
    for(let number= beginRange; number<=endRange; number++) {
        let description = number+' :' 
        if (number % 2 == 0) {
            description+="is even;"
        }
        if (number % 3 == 0) {
            description+="is a multiple of 3;"
        }
        if (number % 10 == 0) {
            description+="is a multiple of 10;"
        }
        console.log(description)
    }
}

function t04() {
    let fst_number = prompt("Input a first number")
    let scnd_number = prompt("Input a second number")
    if(fst_number === '' && scnd_number === '') {
        checkDivision()
        return
    }
    if(fst_number === '') {
        checkDivision(1, scnd_number)
        return
    }
    if(scnd_number === '') {
        checkDivision(fst_number)
        return
    }
    checkDivision(fst_number, scnd_number)
}
t04();