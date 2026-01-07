const audio = document.getElementById("music");
const btn = document.getElementById("playBtn");

// пробуем автозапуск
window.addEventListener("load", () => {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        btn.textContent = "❚❚";
      })
      .catch(() => {
        // браузер запретил — ждём клик
        btn.textContent = "▶";
      });
  }
});

// кнопка play/pause
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "❚❚";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
});

/* ===== COMMENTS (localStorage) ===== */
const form = document.getElementById("commentForm");
const list = document.getElementById("commentList");

let comments = JSON.parse(localStorage.getItem("comments") || "[]");

function renderComments(){
  list.innerHTML = "";
  comments.forEach(c=>{
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div class="comment-head">
        <div class="author">${c.name}</div>
        <div class="date">${c.date}</div>
      </div>
      <div class="text">${c.text}</div>
    `;
    list.appendChild(div);
  });
}
renderComments();

form.addEventListener("submit", e=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const text = document.getElementById("text").value;
  const now = new Date().toLocaleString();

  comments.push({name,text,date:now});
  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
  form.reset();
});
