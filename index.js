const selectReward = document.querySelectorAll(".select");

//select reward
selectReward.forEach(function(button){
    button.addEventListener("click", () => {
          modal.style.display = "block";
          document.body.classList.add("fixed");
          bookmarked.innerHTML = "bookmarked";
          bookmarked.classList.toggle('changed');
        });
  })