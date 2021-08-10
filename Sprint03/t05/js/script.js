//GuestList
console.log("GuestList")
let guestList = new WeakSet()

let vasya = {name: "Вася"}
let petya = {name: "Петя"}
let dasha = {name: "Даша"}
let olya = {name: "Оля"}
let anna = {name: "Анна"}

guestList.add(vasya)
guestList.add(petya)
guestList.add(dasha)
guestList.add(olya)
guestList.add(anna)

console.log(guestList.has(vasya)) // true
guestList.delete(vasya)
console.log(guestList.has(vasya)) // false

//Menu
console.log("Menu")
let menu = new Map()

menu.set("Soup", 10)
menu.set("Rice", 7)
menu.set("Beaf", 20)
menu.set("Ice cream", 5)
menu.set("Bread", 2)

console.log(menu.get('Soup')) //10
console.log(menu.has('Soup')) //true
menu.delete('Soup')
console.log(menu.has('Soup')) //false

//BankVault
console.log("BankVault")
let bankVault = new WeakMap()

menu.set("Box1", 594)
menu.set("Box2", 247)
menu.set("Box3", 426)
menu.set("Box4", 951)
menu.set("Box5", 349)

console.log(menu.get("Box1")) //594
console.log(menu.has("Box1")) //true
menu.delete("Box1")
console.log(menu.has("Box1")) //false

//CoinCollection
console.log("CoinCollection")
let coinCollection = new Set()

let dollar = {name: "Dollar"}
let euro = {name: "Euro"}
let ruble = {name: "Ruble"}
let pesso = {name: "Pesso"}
let crona = {name: "Crona"}

guestList.add(dollar)
guestList.add(euro)
guestList.add(ruble)
guestList.add(pesso)
guestList.add(crona)

console.log(guestList.has(dollar)) // true
guestList.delete(dollar)
console.log(guestList.has(dollar)) // false