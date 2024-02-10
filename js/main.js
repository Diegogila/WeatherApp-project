
import "../css/master.css";

const getData = async () => {
    const response = await fetch("https://www.7timer.info/bin/api.pl?lon=-99.139&lat=19.434&product=civil&output=json");
    const data = await response.json();
    return data;
}


const render = async () => {
    const data = await getData();
    
    console.log(data);
    const container = document.querySelector('.carousel-container');

}

window.addEventListener('load', render);