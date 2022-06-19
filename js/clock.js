const clock = document.querySelector("h1.clock");

function currentTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(currentTime, 1000);
