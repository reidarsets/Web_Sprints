function houseBlueprint(address, date, description, owner, size) {
    this.address = address
    this.date = date
    this.description = description
    this.owner = owner
    this.size = size
    this._averageBuildSpeed = 0.5
    this.getDaysToBuild = function() {
        return this.size/this._averageBuildSpeed
    }
 }

 function HouseBuilder(address, description, owner, size, roomCount) {
    this.roomCount = roomCount
    houseBlueprint.call(this, address, new Date(), description, owner, size)
}

const house= new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith',
    110,
    5);
    
console.log(house.address);
// '88 Crescent Avenue'

console.log(house.description);
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'

console.log(house.size);
// 110

console.log(house.date.toDateString());
// [the current date], for example:'Tue Aug 11 2020'

console.log(house.owner);
// J. Smith

console.log(house._averageBuildSpeed);
// 0.5

//console.log(house.getDaysToBuild());
// 220

console.log(house.roomCount);
// 5