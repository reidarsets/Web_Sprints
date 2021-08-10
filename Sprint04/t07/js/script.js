let day1 = [document.getElementsByClassName("date")[0], document.getElementsByClassName("image")[0], document.getElementsByClassName("degrees")[0]]
let day2 = [document.getElementsByClassName("date")[1], document.getElementsByClassName("image")[1], document.getElementsByClassName("degrees")[1]]
let day3 = [document.getElementsByClassName("date")[2], document.getElementsByClassName("image")[2], document.getElementsByClassName("degrees")[2]]
let day4 = [document.getElementsByClassName("date")[3], document.getElementsByClassName("image")[3], document.getElementsByClassName("degrees")[3]]
let day5 = [document.getElementsByClassName("date")[4], document.getElementsByClassName("image")[4], document.getElementsByClassName("degrees")[4]]
let day6 = [document.getElementsByClassName("date")[5], document.getElementsByClassName("image")[5], document.getElementsByClassName("degrees")[5]]
let all_days = [day1, day2, day3, day4, day5, day6]

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.433334&lon=30.516666&appid=68c67864d8c16f173a678c0caafdc37a').then(function (resp) {return resp.json() }).then(function (data) {
    for(let i = 0; i < 6; i++) {
        let date = new Date();
        date.setTime(date.getTime() + (i * 24 * 60 * 60 * 1000));
        date = date.toString()
        date = date.substr(4, 6)
        all_days[i][0].innerHTML = date
        all_days[i][1].src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
        all_days[i][2].innerHTML = "" + (Math.round(data.daily[i].temp.max-273)) + "+"
    }
})