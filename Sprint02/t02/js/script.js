(function() {
    "use strict"
    let a_reg= /^[A-Za-z]+$/;
    let g_reg= /^female$|^male$/i;
    let ag_reg= /^[^0\D]\d{0,4}$/;
    let animal = prompt('What animal is the superhero most similar to?', '')
    if(animal.match(a_reg) == null) {
        alert("Don't match requirements!");
        return;
    }
    if (animal.length > 20) {
        alert("Name of the animal is too long!");
        return;
    }
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '')
    if (gender.match(g_reg) == null && gender.length > 0) {
        alert("Don't match requirements!")
        return
    }
    let age = prompt('How old is the superhero?', '')
    if(age.length > 5) {
        alert("Length of the age is too long!");
        return;
    }
    if (age.match(ag_reg) == null) {
        alert("Don't match requirements!");
        return;
    }
    let description;
    if(gender === 'male' && age < 18) {
        description = 'boy';
    }
    if (gender === 'male' && age >= 18) {
        description = 'man'
    }
    if(gender === 'female' && age < 18) {
        description = 'girl'
    }
    if(gender === 'female' && age >= 18) {
        description = 'woman'
    }
    if(gender === '' && age < 18) {
        description = 'kid'
    }
    if(gender === '' && age >= 18) {
        description = 'hero'
    }
    alert('The superhero name is: ' + animal + "-" + description + "!")
})();