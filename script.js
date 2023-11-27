let options = {
    method: 'GET',
    headers: { 'x-api-key': '+d/YXxuPnFnM6H88cn3tfQ==oKVbpXD6SbKH2sib' }
  }
  
//   let url = 'https://api.api-ninjas.com/v1/weather?city=Delhi';
  
  const getWeather= (city)=> {
   cityName.innerHTML = city
    fetch('https://api.api-ninjas.com/v1/weather?city=' + city,options)
        .then(res => res.json()) // parse response as JSON
        .then((data)=> {
          console.log(data)
          
          
        //   cloud_pct.innerHTML   = data.cloud_pct
          temp.innerHTML  = data.temp
          temp2.innerHTML  = data.temp
          feels_like.innerHTML  = data.feels_like
          humidity.innerHTML  = data.humidity
          humidity2.innerHTML  = data.humidity
          min_temp.innerHTML  = data.min_temp
          max_temp.innerHTML  = data.max_temp
          wind_speed.innerHTML  = data.wind_speed
          wind_speed2.innerHTML  = data.wind_speed
          wind_degrees.innerHTML  = data.wind_degrees
          sunrise.innerHTML   = data.sunrise
          sunset.innerHTML   = data.sunset
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); }
        submit.addEventListener("click", (e)=>{
            e.preventDefault()
            getWeather(city.value)
        })
        getWeather("Delhi")