function checkBrackets(str) {
    if (typeof str !== "string" || (!str.includes('(') && !str.includes(')'))) {
        return -1
    }
    let brackets = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '(') {
            brackets++
        }
        else {
            if(str[i] == ')') {
                brackets--
            }
        }
    }
    if(brackets < 0) {
        brackets *= (-1)
    }
    return brackets
}