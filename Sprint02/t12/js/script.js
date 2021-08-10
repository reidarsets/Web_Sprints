function concat(fst_str, scnd_str) {
    scnd_phrase.number=0
    if(typeof scnd_str != 'string') {
        function scnd_phrase() {
            scnd_phrase.number++
            let scnd_str = prompt('Input the second phrase')
            return fst_str + " " + scnd_str
        }
        return scnd_phrase
    }
    return fst_str + " " + scnd_str
}