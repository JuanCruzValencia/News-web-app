//Moment.js

const displayWatch = () => {
  document.getElementById('moment__container').innerText = moment().format('LT');
};
setInterval(displayWatch, 1000)