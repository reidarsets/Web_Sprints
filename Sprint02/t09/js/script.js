function getFormattedDate(dateObject) {
    let date = "";
    if(dateObject.getDate() < 10) {
        date += "0"
    }
    date += dateObject.getDate()
    date += "."
    if(dateObject.getMonth() < 10) {
        date += "0"
    }
    date += dateObject.getMonth() + 1
    date += "."
    
    date += dateObject.getFullYear()
    date += " "
    if(dateObject.getHours() < 10) {
        date += "0"
    }
    date += dateObject.getHours()
    date += ":"
    if(dateObject.getMinutes() < 10) {
        date += "0"
    }
    date += dateObject.getMinutes()
    date += " "
    switch(dateObject.getDay()) {
        case 0:
            date += "Sunday"
            break
        case 1:
            date += "Monday"
            break
        case 2:
            date += "Tuesday"
            break
        case 3:
            date += "Wednesday"
            break
        case 4:
            date += "Thursday"
            break
        case 5:
            date += "Friday"
            break
        case 6:
            date += "Saturday"
            break
    }
    return date
}
const date0= new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');
console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday