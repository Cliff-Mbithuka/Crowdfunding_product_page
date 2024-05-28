const selectReward = document.querySelectorAll(".select");
const submitButtons = document.querySelectorAll(".Continue");
const thankYouPage = document.getElementById("thankYouPage");
const totals = localStorage.setItem('totalAmount', 0);
const percentage =  localStorage.setItem('percentage', 0);
const totalBackers =  localStorage.setItem('totalBackers', 0);
let myTotals = document.getElementById('totals');
myTotals.innerHTML = localStorage.getItem('totalAmount');
let myBackers = document.getElementById('backersTwo');
myBackers.innerHTML = localStorage.getItem('totalBackers');
let myPercentage = document.getElementById('mypercentages');
myPercentage.innerHTML = localStorage.getItem('percentage');

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
    allPledges.forEach(function (pledge) {
      pledge.querySelector(".below").style.display = "none";
    });

    pledge.querySelector(".below").style.display = "block";
  });
});

// *************event listener
// submit button
submitButtons.forEach(function (button) {
  button.addEventListener("click", ClickSubmitButton);
});

// submit button
function ClickSubmitButton(e) {
  const oldAmount = localStorage.getItem('totalAmount');
  const oldBackers = localStorage.getItem('totalBackers');
 const oldPercentage = localStorage.getItem('percentage');
  e.preventDefault();
  const pledgeBox = e.target.closest('.pledge');
  const dolarInput = pledgeBox.querySelector('.dolar');
  const value = parseFloat(dolarInput.value);
  const id = new Date().getTime().toString();


  const finalAmount = parseFloat(oldAmount) + parseFloat(value);
  localStorage.setItem('totalAmount', finalAmount);
const newBackers = parseInt(oldBackers) + 1;
localStorage.setItem('totalBackers', newBackers);
myTotals.innerHTML = localStorage.getItem('totalAmount');
myBackers.innerHTML = localStorage.getItem('totalBackers');
 const newPercentage = parseInt(oldPercentage) + 10;
localStorage.setItem('percentage', newPercentage);
myPercentage.value = localStorage.getItem('percentage');


dolarInput.value = "";
  // Update total backed amount
  // updateTotalBackedAmount(value);

  // Add to local Storage
  // addToLocalStorage(id, value);

}


// Function to update the total backed amount
function updateTotalBackedAmount(amount) {
  const totalBackedElement = document.querySelector('.total');
  let currentAmount = parseFloat(totalBackedElement.textContent.replace(/[^0-9.-]+/g,""));
  currentAmount += parseFloat(amount);
  totalBackedElement.textContent = `$${currentAmount.toLocaleString()}`;
};

//****************local storage */
function addToLocalStorage(id, value) {
  const  plege = { id, value };
    let items = getLocalStorage();
    items.push(plege);
    localStorage.setItem("list", JSON.stringify(items));
  
  }
  
  function getLocalStorage(){
  return localStorage.getItem("list")?JSON.parse(localStorage.getItem('list')):[];
  };

  //open Thank you
  const openThankYou = document.querySelectorAll(".Continue");
  openThankYou.forEach(function (button) {
    button.addEventListener("click", () =>{
      modal.style.display = "none";
      thankYouPage.style.display = "block";
    })
  })
 //close thank you
 closeThankYouBtn.onclick = function () {
  thankYouPage.style.display = "none";
  document.body.classList.remove("fixed");
};


                   // Days counter
                   function updateCountdown() {
                    const today = new Date();
                    const targetDate = new Date(today.getFullYear(), 9, 17);
                    const difference = targetDate - today;
                    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
                    document.getElementById('daysLeft').textContent = daysLeft;
                  }
                  updateCountdown();
                
                  setInterval(updateCountdown, 1000 * 60 * 60 * 24);

  
