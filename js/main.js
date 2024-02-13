import "../css/master.css";
import getDateName from "./utils/getDateName";
import toggleDay from "./utils/toggleDay";
import cities from "./utils/getCities.json"
const selectorTag = document.querySelector("select");

const hour = new Date().getHours();
let itsDay = hour < 18 && hour > 6 ? true : false;



const getCities = () => {
  const optionsTag = [];
  cities.citiesData.forEach((city) => {
    const option = `<option value="${cities.citiesData.indexOf(city)}">${city.city}, ${city.country}</option>`;
    optionsTag.push(option);
  });
  selectorTag.innerHTML = optionsTag.join(',');
}

const getWeather = async (city) => {
    

    const container = document.querySelector(".carousel-container");
    container.innerHTML = "";
    const cards = [];
    //Fetching
    const response = await fetch(`https://www.7timer.info/bin/api.pl?lon=${city.longitude}&lat=${city.latitude}&product=civillight&output=json`);
    const data = await response.json();
    data.dataseries.forEach((element) => {
      //Date info
      const {day, month, date} = getDateName(element.date);
      //Render
      const card = document.createElement("card");
      card.className = "card";
      card.innerHTML = `<div class="card__title card__title--${itsDay ? "day" : "night"}">
      <p>${day}</p>
      <p>${month} ${date}</p>
      </div>
      <div class="card__content">
      <div class="card__image-container">
      <img class="card__image card__image--${itsDay ? "day" : "night"}" src="./assets/images/${element.weather}.png" alt="">
      </div>
      <div class="card__data card__data--${itsDay ? "day" : "night"}">
      <p>${element.weather.charAt(0).toUpperCase().concat(element.weather.slice(1))}</p>
      <p>Min: ${element.temp2m.min}°C</p>
      <p>Max: ${element.temp2m.max}°C</p>
      </div>
      </div>`;
      cards.push(card)
    });
    container.append(...cards);
  };
  
  const render = async () => {
    toggleDay(itsDay);
    getCities();
    getWeather(cities.citiesData[0]);    
}



selectorTag.addEventListener("change", () => {
  console.log(selectorTag.value);
  getWeather(cities.citiesData[selectorTag.value]);
})
window.addEventListener("load", render);
