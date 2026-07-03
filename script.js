const welcome = document.querySelector("#welcome");
const calendar = document.querySelector("#calendar");
const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");
const backButton = document.querySelector("#back");
const message = document.querySelector("#message");
const dateInput = document.querySelector("#date");
const confirmButton = document.querySelector("#confirm");
const dateMessage = document.querySelector("#date-message");

const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

// Flying hearts
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");

  heart.className = "flying-heart";
  heart.textContent = i % 3 === 0 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 25}px`;
  heart.style.animationDuration = `${7 + Math.random() * 8}s`;
  heart.style.animationDelay = `${Math.random() * -15}s`;

  document.querySelector("#hearts").appendChild(heart);
}

function celebrate() {
  const colors = [
    "#ef476f",
    "#ff8fab",
    "#ffd166",
    "#9b5de5",
    "#06d6a0"
  ];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;

    document.querySelector("#confetti").appendChild(piece);

    setTimeout(() => piece.remove(), 2500);
  }
}

yesButton.addEventListener("click", () => {
  celebrate();

  setTimeout(() => {
    welcome.classList.remove("active");
    calendar.classList.add("active");
  }, 900);
});

let noCount = 0;

noButton.addEventListener("click", () => {
  const replies = [
    "Are you sure? Ek baar Yes button ko bhi dekho 🌸",
    "Imaginary flowers bhi lekar aaunga 🌷",
    "Okay... lekin Yes button abhi bhi yahin hai 💛"
  ];

  message.textContent = replies[Math.min(noCount, replies.length - 1)];
  noCount++;
});

backButton.addEventListener("click", () => {
  calendar.classList.remove("active");
  welcome.classList.add("active");
});

dateInput.addEventListener("change", () => {
  confirmButton.disabled = !dateInput.value;
  dateMessage.textContent = "";
});

confirmButton.addEventListener("click", () => {
  const selectedDate = new Date(`${dateInput.value}T00:00:00`);

  celebrate();

  dateMessage.textContent =
    `Perfect! ${selectedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })} is our special day 💖`;
});
