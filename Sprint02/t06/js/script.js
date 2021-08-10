function t06() {
    let first_name = prompt("Enter your first name")
    for(let i = 0; i < first_name.length; i++) {
        if(first_name.charCodeAt(i) < 65 || first_name.charCodeAt(i) > 90) {//Верхний регистр
            if(first_name.charCodeAt(i) < 97 || first_name.charCodeAt(i) > 122) {//Нижний регистр
                alert("Invalid first name")
                console.log("Invalid first name")
                return
            }
        }
    }
    let last_name = prompt("Enter your second name")
    for(let i = 0; i < last_name.length; i++) {
        if(last_name.charCodeAt(i) < 65 || last_name.charCodeAt(i) > 90) {//Верхний регистр
            if(last_name.charCodeAt(i) < 97 || last_name.charCodeAt(i) > 122) {//Нижний регистр
                alert("Invalid last name")
                console.log("Invalid last name")
                return
            }
        }
    }
    let new_fst_name = first_name[0].toUpperCase() + first_name.substr(1)
    let new_last_name = last_name[0].toUpperCase() + last_name.substr(1)
    console.log('Greeting ' + new_fst_name + ' ' + new_last_name)
    alert('Greeting ' + new_fst_name + ' ' + new_last_name)
} 
t06();