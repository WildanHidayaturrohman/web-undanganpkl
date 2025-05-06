const name = "Hallo valeeee, selamat datang yaa kakak tertua";
let i = 0;

function typing() {
  if (i < name.length) {
    document.getElementById("typing").textContent += name.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
}

window.onload = typing;
function goBack() {
    window.location.href = "index.html";
  }
  
  // Panggil fungsi typing tetap ada
  typing();
  
  function updateCountdown() {
    const targetDate = new Date("2025-05-14T03:00:00Z"); // 10:00 WIB = 03:00 UTC
    const now = new Date();
    const diff = targetDate - now;
  
    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "Acara telah dimulai!";
      clearInterval(countdownInterval);
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  const countdownInterval = setInterval(updateCountdown, 1000);
  