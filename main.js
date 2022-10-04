let eventDate = new Date('December-31-2023 23:59:59');

let countDown = setInterval(function () {
  let currentDate = new Date().getTime();
  let dateDiff = eventDate - currentDate;
  //Set Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector('.counter .days').innerHTML = days;
  document.querySelector('.counter .hours').innerHTML = hours;
  document.querySelector('.counter .minutes').innerHTML = minutes;
  document.querySelector('.counter .seconds').innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(countDown);
    document.querySelector('.counter .days').innerHTML = '00';
    document.querySelector('.counter .hours').innerHTML = '00';
    document.querySelector('.counter .minutes').innerHTML = '00';
    document.querySelector('.counter .seconds').innerHTML = '00';
  }
}, 1000);
