let card = document.getElementById('weather-card')
let input = document.getElementById("searchInput");
const weather = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e2b06d3e93df6598ba02f0f0bc660b5d&units=metric`)
    .then((response)=>response.json())
    .then((response)=>{

        card.innerHTML = `loading`

        
        card.innerHTML = `
    
      <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="p-3">
          <h2>${response.main.temp}&deg;</h2>
      </div>
      <div class="p-3">
       <img src=http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png class="card-img-top" alt="...">
      </div>
      <div class="p-3">
          <h3>${response.name}</h3>
          <span class="weather__description">${response.weather[0].main}</span>
      </div>
  </div>
  <div class="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
      <div class="p-4 d-flex justify-content-center align-items-center">
          <img src="https://svgur.com/i/oHw.svg">
          <span>>${response.main.humidity}%</span>
      </div>
      <div class="p-4 d-flex justify-content-center align-items-center">
          <img src="https://svgur.com/i/oH_.svg">
          <span>${response.main.feels_like} mB</span>
      </div>
      <div class="p-4 d-flex justify-content-center align-items-center">
          <img src="https://svgur.com/i/oKS.svg">
          <span>>${response.main.pressure} km/h</span>
      </div>
  </div>
      `
      card.classList.add('active');
     
    })
    .catch((err)=>{
       console.log(err)
    })
}

weather()