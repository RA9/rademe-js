/*-- Date Method --*/
lib.date = {};

const clock = (lib.date.clock = elem => {
  const getCurrentDate = new Date();
  let currentHours = getCurrentDate.getHours();
  let currentMinutes = getCurrentDate.getMinutes();
  let currentSeconds = getCurrentDate.getSeconds();
  let ampm = "";
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

  if (currentHours > 12) {
    currentHours = currentHours - 12;
    ampm = " PM";
  } else if (currentHours == 12) {
    currentHours = 12;
    ampm = " AM";
  } else if (currentHours < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (currentHours == 0) {
    currentHours = 12;
  }

  elem.textContent = currentHours + " : " + currentMinutes + " : " + currentSeconds + ampm;
  setTimeout(function () {
    clock(elem);
  }, 500);


});


const getFullDate = (lib.date.getFullDate = (element, date) => {
  let currentDate = "";
  if (date != null || date != undefined) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec";
  monthsArr = months.split(",");
  console.log("Month arr: ", monthsArr);
  element.innerHTML =
    days[currentDate.getDay()] +
    "   " +
    monthsArr[currentDate.getMonth()] +
    "  " +
    currentDate.getDate() +
    ", " +
    currentDate.getFullYear();
  console.log("My elements: ", element);
  display(element);
});

const getAge = (lib.date.getAge = year => {
  const currentDate = new Date();
  let newAge = 0;
  if (year != null || year != undefined) {
    newAge = currentDate.getFullYear() - year;
  } else {
    newAge = 1;
  }
  return newAge;
});



