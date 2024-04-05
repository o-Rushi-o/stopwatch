const clock = document.querySelector(".clock");
let sec = 0,
  min = 0,
  hr = 0,
  intervalID;

const startSW = () => {
  intervalID = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      min++;
      sec = 0;
    }
    // console.log(`${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${sec}`);
    const str_hr = hr.toString().padStart(2, "0");
    const str_min = min.toString().padStart(2, "0");
    const str_sec = sec.toString().padStart(2, "0");
    clock.innerText = `${str_hr}:${str_min}:${str_sec}`;
  }, 1000);
};
const stopSW = () => {
  clearInterval(intervalID);
};
