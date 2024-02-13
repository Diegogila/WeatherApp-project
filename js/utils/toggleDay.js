

const toggleDay = (itsDay) => {
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

export default toggleDay