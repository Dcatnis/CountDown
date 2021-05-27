const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway=document.querySelector(".giveaway")
  const deadline=document.querySelector(".deadline")
  const items=document.querySelectorAll(".deadline-format h4")
  //console.log(items)

  let tempDate=new Date()
  let tempYear=tempDate.getFullYear()
  let tempMonth=tempDate.getMonth()
  let tempDay=tempDate.getDate()
  
 // let futureDate=new Date(2022,5,23,17,45)
  //console.log(futureDate)

const futureDate=new Date(tempYear,tempMonth,tempDay+10,17,45,0)

  const year=futureDate.getFullYear()
  //console.log(year)
  const hours=futureDate.getHours()
  const minutes=futureDate.getMinutes()
  let month=futureDate.getMonth()
  //console.log(months[month])
  month=months[month]
  const weekday=weekdays[futureDate.getDay()]
  //console.log(weekday)
  const date=futureDate.getDate()
  //console.log(date)

  
  giveaway.textContent=`Giveaway ends on ${weekday}, ${date}  ${month} ${year} ${hours}:${minutes}pm`

  //countdown
  

const futureTime=futureDate.getTime()
//console.log(futureTime)

function getRemainingTime(){
const today=new Date().getTime()
//console.log(today)
const t=futureTime-today
//console.log(t)
// 1s=1000ms
//1m=60s
//1h=60min
//1day=24h

// values in ms
const oneDay=24*60*60*1000
//console.log(oneDay)
const oneHour=60*60*1000
//console.log(oneHour)
const oneMinute=60*1000

//calculate days remaining
let days=t/oneDay //milisecunde de diferenta dintre timp minus milisecunde din o zi
//console.log(days)
days=Math.floor(days)
//console.log(days)
let hoursremain=t%oneDay/oneHour
hoursremain=Math.floor(hoursremain)
//console.log(hoursremain)
let minuteremain=t%oneHour/oneMinute
minuteremain=Math.floor(minuteremain)
//console.log(minuteremain)

let seconds=Math.floor((t%oneMinute)/1000)
//console.log(seconds)

function format(item){
    if(item<10){
        return item=`0${item}`
    }else{
        return item
    }
}

//set values arrays

const values=[days,hoursremain,minuteremain,seconds]
items.forEach(function(item,index){
    item.innerHTML=format(values[index])

})
if(t<0){
    clearInterval(countdown)
    deadline.innerHTML=`<h4 class="expired">sorry this giveaway has expired</h4>`
}

}

//countdown
let countdown=setInterval(getRemainingTime,1000)

getRemainingTime();