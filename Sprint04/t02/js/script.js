document.getElementById("notification").innerHTML = `Sorting by Name, order: ASC`;
td_data = [["Black Panther", 66, 53], ["Captain America", 79, 137], ["Captain Marvel", 97, 26], 
        ["Hulk", 80, 49], ["Iron Man", 88, 48], ["Spider-Man", 78, 16],
        ["Thanos", 99, 1000], ["Thor", 95, 1000], ["Yon-Rogg", 73, 52]]
function createTable() {
    let table = document.createElement("table")
    table.style.width = "100%"
    for(let i = 0; i < 3; i++) {
        let th = document.createElement("th")
        if(i == 0) {
            let th_text = document.createTextNode("Name")
            th.appendChild(th_text)
            th.setAttribute("onclick", "sort_name()")    
        }
        if(i == 1) {
            let th_text = document.createTextNode("Strength")
            th.appendChild(th_text)
            th.setAttribute("onclick", "sort_strength()")   
        }
        if(i == 2) {
            let th_text = document.createTextNode("Age")
            th.appendChild(th_text)
            th.setAttribute("onclick", "sort_age()")   
        }
        table.appendChild(th)
    }
    for(let i = 0; i < td_data.length; i++) {
        let tr = document.createElement("tr")
        for(let j = 0; j < 3; j++) {
            let td = document.createElement("td")
            let text = document.createTextNode(td_data[i][j])
            td.appendChild(text)
            td.setAttribute("id", `${i}${j}`)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    document.getElementsByTagName("body")[0].appendChild(table)
}

sort_name.number = 1
function sort_name() {
    if(sort_name.number == 1) {
        td_data.sort(function(a, b) {
            return a[0] == b[0] ? 0 : (a[0] > b[0] ? -1 : 0);
        })
        sort_name.number = 2
        document.getElementById("notification").innerHTML = `Sorting by Name, order: DESC`;
    }
    else {
        td_data.sort(function(a, b) {
            return a[0] == b[0] ? 0 : (a[0] < b[0] ? -1 : 0);
        })
        sort_name.number = 1
        document.getElementById("notification").innerHTML = `Sorting by Name, order: ASC`;
    }
    for(let i = 0; i < td_data.length; i++) {
        for(let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).innerHTML = td_data[i][j]
        }
    }
}

sort_strength.number = 1
function sort_strength() {
    if(sort_strength.number == 1) {
        td_data.sort(function(a, b) {
            return a[1] == b[1] ? 0 : (a[1] > b[1] ? -1 : 0);
        })
        sort_strength.number = 2
        document.getElementById("notification").innerHTML = `Sorting by Strength, order: DESC`;
    }
    else {
        td_data.sort(function(a, b) {
            return a[1] == b[1] ? 0 : (a[1] < b[1] ? -1 : 0);
        })
        sort_strength.number = 1
        document.getElementById("notification").innerHTML = `Sorting by Strength, order: ASC`;
    }
    for(let i = 0; i < td_data.length; i++) {
        for(let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).innerHTML = td_data[i][j]
        }
    }
}

sort_age.number = 1
function sort_age() {
    if(sort_age.number == 1) {
        td_data.sort(function(a, b) {
            return a[2] == b[2] ? 0 : (a[2] > b[2] ? -1 : 0);
        })
        sort_age.number = 2
        document.getElementById("notification").innerHTML = `Sorting by Age, order: DESC`;
    }
    else {
        td_data.sort(function(a, b) {
            return a[2] == b[2] ? 0 : (a[2] < b[2] ? -1 : 0);
        })
        sort_age.number = 1
        document.getElementById("notification").innerHTML = `Sorting by Age, order: ASC`;
    }
    for(let i = 0; i < td_data.length; i++) {
        for(let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).innerHTML = td_data[i][j]
        }
    }
}
createTable()