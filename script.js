// Fecha de aniversario: 5 de mayo de 2025.
const START_DATE = "2025-05-05";
const start = (() => {
  const [year, month, day] = START_DATE.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0);
})();
const dateParts = ["days", "hours", "minutes", "seconds"];
function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now.getTime() - start.getTime());
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);
  [days, hours, minutes, seconds].forEach((value, index) => {
    document.getElementById(dateParts[index]).textContent = value.toLocaleString("es-CL");
  });
}
updateCounter();
setInterval(updateCounter, 1000);

document.getElementById("surpriseBtn").addEventListener("click", () => {
  document.getElementById("carta").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("heartBtn").addEventListener("click", () => {
  const message = document.getElementById("heartMessage");
  message.hidden = !message.hidden;
  document.getElementById("heartBtn").textContent = message.hidden ? "Un mensajito para ti ♡" : "Te mando otro corazoncito ♡";
});

// Vistas previas temporales para seleccionar fotos mientras editas.
// Para que las imágenes aparezcan a todos los visitantes, sigue LEEME.txt.
document.querySelectorAll('input[type="file"][data-preview]').forEach(input => {
  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    const image = document.getElementById(input.dataset.preview);
    const reader = new FileReader();
    reader.onload = () => { image.src = reader.result; image.hidden = false; };
    reader.readAsDataURL(file);
  });
});

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.querySelector("span").textContent = "Pausar nuestra canción";
    } catch {
      musicToggle.querySelector("span").textContent = "Añade tu MP3 a assets";
    }
  } else {
    music.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.querySelector("span").textContent = "Reproducir nuestra canción";
  }
});