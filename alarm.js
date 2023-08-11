let time = document.getElementById("one")
let min = document.getElementById("two")
let sec = document.getElementById("three")
let timeZone = document.getElementById("four")
let date = new Date()
let amPm;
let userMin = document.getElementById("usermin")
let userHour = document.getElementById("userhour")
let userZone = document.getElementById("userzone")
let Day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let real = document.getElementById("day")

ringtone = new Audio("Asake_-_Mogbe.mp3")
// getHours = getHours % 12 || 12
setInterval(() => {
    let date = new Date()
    time.innerHTML = date.getHours() % 12
    min.innerHTML = date.getMinutes()
    sec.innerHTML = date.getSeconds()

    if (date.getHours() % 12 == 0){
        amPm = "pm"
    }
    else{
        amPm = "am"
    }
    timeZone.innerHTML = amPm

}, 1000)

let day = date.getDay()
let dayOfWeek;
switch (date = new Date().getDay()) {
    case 0:
        dayOfWeek = "Sunday,"
        break;
    case 1:
        dayOfWeek = "Monday,"
        break;
    case 2:
        dayOfWeek = "Tuesday,"
        break;
    case 3:
        dayOfWeek = "Wednesday,"
        break;
    case 4:
        dayOfWeek = "Thursday,"
        break;
    case 5:
        dayOfWeek = "Friday,"
        break;
    case 6:
        dayOfWeek = "Saturday,"
        break;
    default:
        "Lovely Day"
        break;
}
Day.innerHTML = dayOfWeek

let months = date = new Date().getMonth()
let monthOfTheYear;
switch (date = new Date().getMonth()) {
    case 0:
        monthOfTheYear = "January"
        break;
    case 1:
        monthOfTheYear = "February"
        break;
    case 2:
        monthOfTheYear = "March"
        break;
    case 3:
        monthOfTheYear = "April"
        break;
    case 4:
        monthOfTheYear = "May"
        break;
    case 5:
        monthOfTheYear = "June"
        break;
    case 6:
        monthOfTheYear = "July"
        break;
    case 7:
        monthOfTheYear = "August"
        break;
    case 8:
        monthOfTheYear = "September"
        break;
    case 9:
        monthOfTheYear = "October"
        break;
    case 10:
        monthOfTheYear = "November"
        break;
    case11:
        monthOfTheYear = "December"
        break;
    default:
        break;
}
month.innerHTML = monthOfTheYear

let years = date = new Date().getFullYear()
year.innerHTML = years

document.getElementById("real").innerHTML = new Date().getDate();

function setAlarm(){
    setInterval(() => {
        let date = new Date();
        if (date.getHours() % 12 == userHour.value && date.getMinutes() == userMin.value && amPm == userZone.value){
            // alert("Alarm is ringing")
            ringtone.play()
            // ringtone.loop = true
        }
    }, 1000)
    
}
