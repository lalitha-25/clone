var filter = document.querySelectorAll(".filters");
filter.forEach(button => {
    button.addEventListener("click", () => {

      filter.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");
    });
});

const addBtn = document.querySelector(".chat-input span");
const attachments = document.getElementById("attachments");

addBtn.addEventListener("click", () => {
  attachments.style.display =
    attachments.style.display === "block" ? "none" : "block";
});
