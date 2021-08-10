document.getElementsByTagName("body")[0].addEventListener("mouseup", function() {
    mouse_up()
})
document.getElementsByTagName("body")[0].addEventListener("mousedown", function(page) {
    mouse_down(page)
})
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(page) {
    mouse_move(page)
})
document.getElementsByTagName("body")[0].addEventListener("click", function(action) {
    mouse_click(action)
})
let pos = {
    object: null
}
function mouse_up() {
    pos.object = null
}
function mouse_down(page) {
    if (page.target && page.target.classList.contains("move")) {
        pos.object = page.target
        pos.offsetX = page.offsetX
        pos.offsetY = page.offsetY
    }
}
function mouse_move(page) {
    if (pos.object) {
        pos.object.style.left = (page.pageX - pos.offsetX) + "px"
        pos.object.style.top = (page.pageY - pos.offsetY) + "px"
    }
}
function mouse_click(action) {
    if (action.target) {
        if (action.target.classList.contains("move")) {
            action.target.classList.remove("move")
            action.target.classList.add("unmove")
        }
        else {
            action.target.classList.remove("unmove")
            action.target.classList.add("move")
        }
    }
}