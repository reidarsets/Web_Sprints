function clear_space(str) {
    str = str.replace(/ +/g, ' ').trim();
    return str

}
function clear_clone(str) {
    let string = str.split(" ");
    let result = [];
    for(var i =0; i < string.length ; i++){
        if(result.indexOf(string[i]) === -1){
          result.push(string[i]);
        } 
    }
    return result.join(" ");
}
function addWords(obj, wrds) {
    wrds = clear_space(wrds)
    wrds = clear_clone(wrds)
    obj.words = clear_space(obj.words)
    obj.words = clear_clone(obj.words)
    obj.words += ' ' + wrds
    obj.words = clear_space(obj.words)
    obj.words = clear_clone(obj.words)
}
function removeWords(obj, wrds) {
    wrds = clear_space(wrds)
    wrds = clear_clone(wrds)
    obj.words = clear_space(obj.words)
    obj.words = clear_clone(obj.words)
    mass_words = wrds.split(' ')
    for(let i = 0; i < mass_words.length; i++) {
        obj.words = obj.words.replace(mass_words[i], '')
    }
    obj.words = obj.words.trim()
}

function changeWords(obj, oldWrds, newWrds) {
    obj.words = clear_space(obj.words)
    obj.words = clear_clone(obj.words)
    oldWrds = clear_space(oldWrds)
    oldWrds = clear_clone(oldWrds)
    newWrds = clear_space(newWrds)
    newWrds = clear_clone(newWrds)
    mass_words = oldWrds.split(' ')
    for(let i = 0; i < mass_words.length; i++) {
        obj.words = obj.words.replace(mass_words[i], newWrds)
    }
    obj.words = clear_space(obj.words)
    obj.words = clear_clone(obj.words)
}
