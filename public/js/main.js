
// the overlay navbar

const hamburger = document.querySelector(".hamburger")
const ham_icon = document.querySelector(".hamburger img")
const overlay = document.querySelector(".overlay")

console.log(ham_icon)

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle("transform_toggle")

    if(overlay.classList.contains("transform_toggle")) {
        ham_icon.src = "asset/cross.svg"
        ham_icon.style.width = "30px"
    } else{
        ham_icon.src = "asset/home/hamburger.svg"
    }
})


//weathers
const submitBtn = document.querySelector(".cityBtn")
const cityName = document.getElementById("city-name")
const errMsg = document.querySelector('.city-input span')

const weather_box = document.querySelector(".box_weather")
const weather_icon = document.querySelector(".weather_icon")


// varaibles for showing the data
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const mood = document.querySelector(".mood")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
console.log(humidity)
console.log(pressure)


const getInfo = async () =>{
    let cityVal = cityName.value;


    if(cityVal === ""){
        errMsg.innerHTML = "please enter a Valid city name"
    } else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f998e9a35516dd308b42505555b461a0`
            const response = await fetch(url)
            const data = await response.json()
            const arrData= [data];

            temp.innerText = arrData[0].main.temp
            mood.innerText = arrData[0].weather[0].main
            city.innerText = arrData[0].name
            pressure.innerText = arrData[0].main.pressure
            humidity.innerText = arrData[0].main.humidity

            const temp_mood = arrData[0].weather[0].main
            // condition for checking the mood of the temp for icon
            if (temp_mood === "Clear") {
                weather_icon.src = "asset/weather_icon/sunny.svg"
            } else if(temp_mood ==="Mist") {
                weather_icon.src = "asset/weather_icon/mist.svg"
            }  else if(temp_mood ==="Rain") {
                weather_icon.src = "asset/weather_icon/rainy.svg"
            } else if(temp_mood ==="Haze") {
                weather_icon.src = "asset/weather_icon/haze.svg"
            }  else if(temp_mood ==="Smoke") {
                weather_icon.src = "asset/weather_icon/smoke.svg"
            } 
            
            else {
                weather_icon.src = "asset/weather_icon/cloudy.svg"
            }

            //time for span tag
            const getTime = ()=>{
                const currentTime = new Date()
                let hour = currentTime.getHours()
                let min = currentTime.getMinutes()
    
                const time = `${hour}:${min}`
                time_name.innerText = time 
    
            }
    
            getTime()



            errMsg.innerHTML = ""
            weather_box.style.display = "block"

        }

        catch{
            errMsg.innerHTML = "please enter a Valid city name"
            weather_box.style.display = "none"
        }
    }
}


submitBtn.addEventListener('click', getInfo)