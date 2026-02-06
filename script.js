var filter = document.querySelectorAll(".filters");
filter.forEach(button => {
    button.addEventListener("click", () => {

      filter.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");
    });
});

var chatlist=document.getElementById("chat-item");
chatlist.forEach()