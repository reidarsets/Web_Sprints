//class missing
for(let i = 0; document.getElementsByTagName("li")[i] != null; i++) {
    if(document.getElementsByTagName("li")[i].className == "good" ||
    document.getElementsByTagName("li")[i].className == "evil" ||
    document.getElementsByTagName("li")[i].className == "unknown") {
        continue
    }
    document.getElementsByTagName("li")[i].className = "unknown"
}
//data-element missing
for(let i = 0; document.getElementsByTagName("li")[i] != null; i++) {
    if(document.getElementsByTagName("li")[i].dataset.element == null) {
        document.getElementsByTagName("li")[i].dataset.element = "none"
    }
}
//append a circle
for(let i = 0; document.getElementsByTagName("li")[i] != null; i++) {
    document.getElementsByTagName('li')[i].appendChild(br)

    let elems = document.getElementsByTagName("li")[i].dataset.element
    arr_elems = elems.split(" ")

    for(let j = 0; arr_elems[j] != null; j++) {
        let node = document.createElement("div")
        if(arr_elems[j] == "air") {
            node.className +="elem air"
            document.getElementsByTagName('li')[i].appendChild(node)
        }
        if(arr_elems[j] == "water") {
            node.className +="elem water"
            document.getElementsByTagName('li')[i].appendChild(node)
            document.getElementsByTagName('li')[i].appendChild(node)
        }
        if(arr_elems[j] == "earth") {
            node.className +="elem earth"
            document.getElementsByTagName('li')[i].appendChild(node)
        }
        if(arr_elems[j] == "fire") {
            node.className +="elem fire"
            document.getElementsByTagName('li')[i].appendChild(node)
        }
        if(arr_elems[j] == "none") {
            node.className +="elem none"
            document.getElementsByTagName('li')[i].appendChild(node)
            
            let node1 = document.createElement("div")
            node1.className +="line"
            node.append(node1)
        }
    }
}