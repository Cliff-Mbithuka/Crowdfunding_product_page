const selectReward = document.querySelectorAll(".select");

//select reward
selectReward.forEach(function (button) {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.classList.add("fixed");
    bookmarked.innerHTML = "bookmarked";
    bookmarked.classList.toggle("changed");
  });
});

//Opn and close modal
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeIcon = document.getElementsByClassName("close-icon")[0];

openModal.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("fixed");
  };
  
  closeIcon.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("fixed");
  };