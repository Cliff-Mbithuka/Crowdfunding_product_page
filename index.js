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

//close modal
const closeIcon = document.querySelector(".close-icon");
closeIcon.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("fixed");
};

// enter reward  (Using Selectors inside the element)
// const pledges = document.querySelectorAll(".pledge");

// pledges.forEach(function(pledge){
//   const clickRadio = document.querySelector(".inline");
//   clickRadio.addEventListener("click", function(){
//       pledges.forEach(function(item){
//           if(item !== pledge){
//               item.classList.remove("show-text");
//           }
//       })
//       pledge.classList.toggle("show-text");
//   })
// });

// //traversing the DOM
const radiobtns = document.querySelectorAll(".inline");
radiobtns.forEach(function (radio) {
  radio.addEventListener("click", function (e) {
    const pledge = e.target.closest(".pledge");
    pledge.classList.toggle("show-text");

    const allPledges = document.querySelectorAll(".pledge");
    allPledges.forEach(function(pledge){
      pledge.querySelector(".below").style.display = "none";
    });

    pledge.querySelector(".below").style.display = "block";
  });
});

