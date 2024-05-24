function eidcount(){
    let days = document.getElementById("days")
    let hours = document.getElementById("hours")
    let min = document.getElementById("min")
    let sec = document.getElementById("sec")
    let count = document.getElementById("count")
    let message2 = document.getElementById("message2")


    let eidDate = new Date("June 17,2024")
    let todayDate = new Date()

    let differenceBothDate = (eidDate - todayDate)

    let daysEid = Math.floor(differenceBothDate/(1000*60*60*24))
    let hoursEid = Math.floor(differenceBothDate/(1000 * 60 * 60) % 24)
    let minEid = Math.floor(differenceBothDate/(1000 * 60) % 60)
    let secEid = Math.floor(differenceBothDate/(1000) %60)
    

    if(secEid < 10){
        secEid = "0" + secEid
    }
    if(hoursEid <10){
        hoursEid = "0" + hoursEid
    }
    if(minEid < 10){
        minEid = "0" + minEid
    }
    if(daysEid <10){
        daysEid = "0" + daysEid
    }

    days.innerHTML = daysEid
    hours.innerHTML = hoursEid
    min.innerHTML = minEid
    sec.innerHTML = secEid
    if(differenceBothDate <0){
        message2.style.display = "block"
        clearInterval(idClear)
        count.innerHTML = `
        <div class="days">
                <h2 id="days">00</h2><span>Days</span>
            </div>
            <div class="hours">
                <h2 id="hours">00</h2><span>Hours</span>
            </div>
            <div class="min">
                <h2 id="min">00</h2><span>Minutes</span>
            </div>
            <div class="sec">
                <h2 id="sec">00</h2><span>Seconds</span>
            </div>
        `
    }



}

let idClear = setInterval(eidcount,1000)


