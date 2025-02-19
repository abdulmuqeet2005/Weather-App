const form = document.querySelector('#form');
const city = document.querySelector('#city');
const div = document.querySelector('#container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(city.value);
    axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
    .then(res => {

        console.log(res.data);
        div.innerHTML = `
        <h1>City: ${res.data.location.name}</h1>
        <h2>Country: ${res.data.location.country}</h2>
        <h3>Region: ${res.data.location.region}</h3>
        <h4>Local Time: ${res.data.location.localtime}</h4>
        <h5>Temperature: ${res.data.current.temp_c}°C</h5>
        <h6>Condition: ${res.data.current.condition.text}</h6>
        <img src="${res.data.current.condition.icon}" alt="weather icon">
        <h7>Wind Speed: ${res.data.current.wind_kph} km/h</h7>
        <h8>Wind Direction: ${res.data.current.wind_dir}</h8>
        <h9>Humidity: ${res.data.current.humidity}%</h9>
        <h10>Pressure: ${res.data.current.pressure_mb} mb</h10>
        <h11>UV Index: ${res.data.current.uv}</h11>
        <h12>Visibility: ${res.data.current.vis_km} km</h12>
        <h13>Cloud Cover: ${res.data.current.cloud}%</h13>
        <h14>Precipitation: ${res.data.current.precip_mm} mm</h14>`
    }).catch(err => {
        console.log('error ==> ' , err);
        alert('no city found')

    })

})