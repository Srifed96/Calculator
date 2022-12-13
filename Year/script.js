const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
function UpdateTime(){
const currentYear=new Date().getFullYear()


const newYear =new Date(`January 1 ${currentYear+1} 00:00:00`)
// console.log(newYear)

const currentDate=new Date()
// console.log(currentDate)

const diff=newYear-currentDate;
// console.log(diff/1000/60/60/24)

const d=Math.floor(diff/1000/60/60/24)  ///days
// console.log(d)

const h=Math.floor((diff/1000/60/60)%24)   //hours
// console.log(h)

const m=Math.floor((diff/1000/60)%60)    //minutes
// console.log(m)

const s=Math.floor((diff/1000)%60)    //seconds
// console.log(s)

// console.log(d+" : "+h+" : "+m+" : "+s)

days.innerHTML=d<10?"0"+d:d
hours.innerHTML=h<10?"0"+h:h
minutes.innerHTML=m<10?"0"+m:m
seconds.innerHTML=s<10?"0"+s:s
}
setInterval(UpdateTime,1000)