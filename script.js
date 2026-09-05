"use strict";

const content = window.anniversaryContent;

// Keep the designed placeholder if a photo is missing or cannot load.
function placePhoto(container, photo) {
  if (!photo.src) return;
  const image = new Image();
  image.alt = photo.alt || photo.title || "A memory of us";
  image.decoding = "async";
  if (photo.position) image.style.objectPosition = photo.position;
  image.addEventListener("load", () => {
    container.replaceChildren(image);
    container.classList.add("has-photo");
  });
  image.src = photo.src;
}

placePhoto(document.getElementById("hero-photo"), content.heroPhoto);
document.getElementById("hero-caption").textContent = content.heroPhoto.caption;

content.memories.forEach((memory, index) => {
  const figure = document.createElement("figure");
  figure.className = `memory-card memory-${index % 4}`;
  const space = document.createElement("div");
  space.className = "photo-space memory-photo";
  const number = document.createElement("span");
  number.className = "photo-number";
  number.textContent = String(index + 1).padStart(2, "0");
  const symbol = document.createElement("span");
  symbol.className = "memory-symbol";
  symbol.textContent = ["♡", "☼", "✿", "✧"][index % 4];
  symbol.setAttribute("aria-hidden", "true");
  const label = document.createElement("span");
  label.className = "photo-label";
  label.textContent = "A photo of us, soon";
  space.append(number, symbol, label);
  placePhoto(space, memory);
  const caption = document.createElement("figcaption");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = memory.label;
  const title = document.createElement("h3");
  title.textContent = memory.title;
  const description = document.createElement("p");
  description.textContent = memory.caption;
  caption.append(eyebrow, title, description);
  if (memory.date) {
    const date = document.createElement("time");
    date.className = "memory-date";
    date.dateTime = memory.date;
    date.textContent = memory.dateLabel || memory.date;
    caption.append(date);
  }
  figure.append(space, caption);
  document.getElementById("memory-grid").append(figure);
});

document.getElementById("salutation").textContent = content.note.salutation;
document.getElementById("signature").textContent = content.note.signature;
content.note.paragraphs.forEach(text => {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  document.getElementById("note-text").append(paragraph);
});

const openButton = document.getElementById("open-letter");
const closeButton = document.getElementById("close-letter");
const letter = document.getElementById("letter-body");
const envelope = document.getElementById("letter-envelope");
openButton.addEventListener("click", () => {
  letter.hidden = false;
  envelope.hidden = true;
  openButton.setAttribute("aria-expanded", "true");
  closeButton.focus({ preventScroll: true });
});
closeButton.addEventListener("click", () => {
  envelope.hidden = false;
  letter.hidden = true;
  openButton.setAttribute("aria-expanded", "false");
  openButton.focus({ preventScroll: true });
});
