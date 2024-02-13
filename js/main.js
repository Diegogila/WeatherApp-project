import "../css/master.css";

const hour = new Date().getHours();
let itsDay = true/*hour < 18 && hour > 6 ? true : false;*/ 

const getDateName = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateStr = date.toString();
  const newDate = new Date(
    dateStr.slice(0, 4),
    dateStr.slice(5, 6) - 1,
    dateStr.slice(6, 8)
  );
  return {day:dayNames[newDate.getDay()], month: monthNames[newDate.getMonth()-1], date: newDate.getDate()} 
};

const getData = async () => {
    //Fetching
    const response = await fetch("https://www.7timer.info/bin/api.pl?lon=-99.139&lat=19.434&product=civillight&output=json");
    const data = await response.json();

    return data
  
    
};

const toggleDay = () => {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const subtitle = document.querySelector(".title-container");
    const footer = document.querySelector("footer");

    if (itsDay) {
        body.classList = "theme theme--day";
    } else{
        body.classList = "theme theme--night"
        header.classList = "header header--night"
        subtitle.classList = "title-container title-container--night"
        footer.classList = "footer footer--night"
    }
    
}

const render = async () => {
    const container = document.querySelector(".carousel-container");
    container.innerHTML = "";
    toggleDay();

    const cards = [];

    const data = await getData();
    
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
}



window.addEventListener("load", render);
