import "../css/master.css";

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
  const container = document.querySelector(".carousel-container");
  container.innerHTML = "";
    //Fetching
  const response = await fetch("https://www.7timer.info/bin/api.pl?lon=-99.139&lat=19.434&product=civillight&output=json");
  const data = await response.json();

  const cards = [];
  data.dataseries.forEach((element) => {
    //Date info
    const {day, month, date} = getDateName(element.date);

    //Render
    const card = document.createElement("card");
    card.className = "card";
    card.innerHTML = `<div class="card__title">
                                <p>${day}</p>
                                <p>${month} ${date}</p>
                            </div>
                            <div class="card__content">
                                <div class="card__image-container">
                                    <img class="card__image card__image--day" src="./assets/images/clear.png" alt="">
                                </div>
                                <div class="card__data card__data--day">
                                    <p>Cloudy</p>
                                    <p>Min: 12°C</p>
                                    <p>Max: 25°C</p>
                                /div>
                            </div>`;
    cards.push(card)
  });

  container.append(cards.join(','));

};

// const render = async () => {
//     const data = await getData();

//     console.log(data);
//     const container = document.querySelector('.carousel-container');

// }

window.addEventListener("load", getData);
