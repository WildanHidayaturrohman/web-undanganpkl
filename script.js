document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.toLowerCase();
  const pass = document.getElementById("password").value;

  const redirectMap = {
    "nahdia": { password: "wildan lucu", page: "nahdia.html" },
    "tia": { password: "wildan keren", page: "tia.html" },
    "rifda": { password: "spesial nih bos", page: "rifda.html" },
    "vale": { password: "aku mah spesial", page: "vale.html" }
  };

  if (redirectMap[user] && redirectMap[user].password === pass) {
    window.location.href = redirectMap[user].page;
  } else {
    document.getElementById("error").textContent = "Username atau sandi salah!";
  }
});

// Autoplay fix untuk audio
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector("audio");

  document.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().catch(error => {
        console.warn("Autoplay diblokir:", error);
      });
    }
  });
});
