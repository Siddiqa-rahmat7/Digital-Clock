function updateClock(){
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

     document.getElementById("time").innerHTML = timeString;
     const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
     const dayName = days[today.getDay()];
     const monthName = months[today.getMonth()];
     const date = today.getDate();
     const year = today.getFullYear();
     const dateString = `${dayName},${monthName} ${date},${year}`;
     document.getElementById("date").innerText = dateString;
}
 setInterval(updateClock,1000);
 updateClock();

