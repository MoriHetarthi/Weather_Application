// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "c66eaf193d7f3edff96dc5d035d6a2e0",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', function(event){

    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value); 
    }
});

// Get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&units=metric&appid=${weatherApi.key}`)
    .then(function(weather){
        return weather.json();
    }).then(showWeatherReport);
}



// Show weather report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todatDate = new Date();
    date.innerText = dateManage(todatDate);

    // document.getElementById('img').style.backgroundImage = "url('Clear.jpg')";
}


// Date Function
function dateManage(dateArg){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}
































