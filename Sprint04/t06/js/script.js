const images = document.querySelectorAll('img')
let counter = 0
const options = {
    root:  null,
    rootMargin: '0px',
    threshold: 0.5
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0.5) {
            loadImage(myImgSingle.target)
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute('data-src')
    counter++
    if(counter <= 20) {
        document.getElementsByClassName("counter_text")[0].innerHTML = counter + " images loaded from 20"
    }
    if(counter == 20) {
        document.getElementsByClassName("counter_text")[0].style.background = "green"
    }
}

const observer = new IntersectionObserver(handleImg, options)

images.forEach(img => {
    observer.observe(img)
})