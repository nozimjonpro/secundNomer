const elSecundForm = document.querySelector(".secund__form");
const elSecundInput = document.querySelector(".secund__input");
const elSecundResult = document.querySelector(".secund__result");
const elDay = elSecundResult.querySelector(".day");
const elHour = elSecundResult.querySelector(".hour");
const elMinute = elSecundResult.querySelector(".minute");
const elSecund = elSecundResult.querySelector(".secund");
const elMillisecund = elSecundResult.querySelector('.millisecund');

let millisecund = 0;
let time = 0;
let minute = 0;
let hour = 23;
let day = 0;

function timer() {
  const timerInterval = setInterval(() => {
    millisecund++;
    elMillisecund.textContent = String(millisecund).padStart(2, 0)
    if(millisecund === 99){
        millisecund = 0;
        time++
        elSecund.textContent = String(time).padStart(2, 0);
    } else if (time === 59) {
      time = 0;
      minute++;
      elMinute.textContent = String(minute).padStart(2, 0);
    } else if (minute === 59) {
      minute = 0;
      hour++;
      elHour.textContent = String(hour).padStart(2, 0);
    } else if (hour === 24) {
      hour = 0;
      day++;
      elDay.textContent = String(day).padStart(2, 0);
    }
    btnStop.addEventListener("click", (evt) => {
      clearInterval(timerInterval);
      btnStart.disabled = false;
    });

    btnReset.addEventListener("click", (evt) => {
      clearInterval(timerInterval);
      elMillisecund.textContent = '00'
        elSecund.textContent = '00';
        elMinute.textContent = '00';
        elHour.textContent = '00';
        elDay.textContent = '00';
        btnStart.disabled = false;
        time = 0;
      });
  }, 10);
}

btnStart.addEventListener("click", (evt) => {
  timer();
  btnStart.disabled = true;
});
