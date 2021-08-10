String.prototype.removeDuplicates = function() {
    str = str.replace(/ +/g, ' ').trim();
    let string = str.split(" ");
    let result = [];
    for(var i =0; i < string.length ; i++){
        if(result.indexOf(string[i]) === -1){
          result.push(string[i]);
        } 
    }
    return result.join(" ");
}

let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str= str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str= str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?

str= ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str= str.removeDuplicates();
console.log(str);
// . ?