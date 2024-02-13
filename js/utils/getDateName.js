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

  export default getDateName