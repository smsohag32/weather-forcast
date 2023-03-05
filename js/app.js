const weather = (city) => {
    const apiKey = '5f691b546199589553550203bcc4a8a3'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))

}

const displayData = (data) => {
    console.log(data);
    const weatherOutput = document.getElementById('weather');
    const cityName = document.getElementById('city');
    const condition = document.getElementById('condition');

    weatherOutput.innerText = data.main.temp;
    // weather
    cityName.innerText = data.name;
    condition.innerText = data.weather[0].main

}

document.getElementById('btn-search').addEventListener('click', function () {
    const inputText = document.getElementById('input-field');
    const city = inputText.value;
    inputText.value = ''
    weather(city)
})

weather('dhaka');