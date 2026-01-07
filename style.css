// ===========================
// MUSIC — play/pause и прогресс
// ===========================
const audio = document.getElementById("music");
const btn = document.getElementById("playBtn");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");

// Кнопка play/pause
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(() => {
      alert("Браузер блокирует воспроизведение музыки. Нажмите ещё раз.");
    });
    btn.textContent = "❚❚";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
});

// Когда метаданные загружены, показываем длительность
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

// Обновляем текущее время и прогресс
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

// Клик по прогресс-бару для перемотки
progressContainer.addEventListener("click", e => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

// Формат времени мм:сс
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

// ===========================
// COMMENTS — сохраняются в localStorage
// ===========================
const form = document.getElementById("commentForm");
const list = document.getElementById("commentList");
let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function renderComments() {
  list.innerHTML = "";
  comments.forEach(c => {
    const d = document.createElement("div");
    d.className = "comment";
    d.innerHTML = `
      <div class="comment-head">
        <div class="author">${c.name}</div>
        <div class="date">${c.date}</div>
      </div>
      <div class="text">${c.text}</div>
    `;
    list.appendChild(d);
  });
}
renderComments();

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const text = document.getElementById("text").value;
  const date = new Date().toLocaleString();
  comments.push({ name, text, date });
  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
  form.reset();
});

// ===========================
// AVATAR — статический с GitHub
// ===========================
const avatar = document.querySelector(".avatar");
avatar.src = "https://gdetyphoon.github.io/photo/avatar.jpg";

// ===========================
// PARTICLES — фоновые частицы
// ===========================
const pBox = document.getElementById("particles");
for (let i = 0; i < 30; i++) {
  const s = document.createElement("span");
  const size = Math.random() * 3 + 1;
  s.style.position = "absolute";
  s.style.width = size + "px";
  s.style.height = size + "px";
  s.style.background = "rgba(255,255,255,.5)";
  s.style.borderRadius = "50%";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
  pBox.appendChild(s);
}
const st = document.createElement("style");
st.innerHTML = "@keyframes float{from{transform:translateY(0)}to{transform:translateY(-120vh)}}";
document.head.appendChild(st);
