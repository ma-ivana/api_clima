const form = document.forms[0];
const submit = form.elements[1];
form.onsubmit = (e) => {
  e.preventDefault() 

const buscarCiudad = form.elements[0].value



fetch(`http://api.openweathermap.org/data/2.5/weather?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
.then(res => res.json())
.then(info => {
 console.log(info);
  const tarjeta = document.querySelector(".tarjeta");

  const name = info.name;
  
  const clima = info.weather[0].description;
  const icono = info.weather[0].icon;
  const temp = info.main.temp;
  const hum = info.main.humidity;
  const viento = info.wind.speed;
  console.log(viento);

  tarjeta.innerHTML = `
    <div class="izq">
      <div class="ciudad">
        <h1>${name}</h1>
        <h3>${clima}</h3>
      </div>

      <div class="temp">
        <div class="icono"><img src="http://openweathermap.org/img/wn/${icono}.png"></div>
        <div class="grados">${temp} <span>ºC</span></div>
      </div>
    </div>
    <div class="dcha">
      <div class="viento">
        <p>Humedad: ${hum} %</p>
        <p>Viento: ${viento} m/s</p>
      </div>
    </div>
    
  `
})

}