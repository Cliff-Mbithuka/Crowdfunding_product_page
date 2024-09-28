const menu = [
  {
    id: 1,
    title: "Bamboo Stand",
    amount: "Pledge $25 or more",
    remain: 101,
    left: "left",
    button: "Select Reward",
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
  },
  {
    id: 2,
    title: "Black Edition Stand",
    amount: "Pledge $75 or more",
    remain: 64,
    left: "left",
    button: "Select Reward",
    desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    amount: "Pledge $200 or more",
    remain: 0,
    left: "left",
    button: "Out of Stock",
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
];

const sectionContainer = document.querySelector(".three");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  mySelectReward();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item, index) {
    let itemClass = "thin";
    if (index === 0) itemClass += " first";
    if (index === 1) itemClass += " second";
    if (index === 2) itemClass += " third";
    return `<div class="${itemClass}">
      <div class="edition">
        <h3 id="bookmarking">${item.title}</h3>
        <p>${item.amount}</p>
      </div>
      <p>
        ${item.desc}
      </p>
      <div class="number">
        <div class="remain">
          <h1 id="bamboo100">${item.remain}</h1>
          <span>${item.left}</span>
        </div>
        <button class="select">${item.button}</button>
      </div>
    </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionContainer.innerHTML = displayMenu;
}

function mySelectReward() {
  const selectReward = document.querySelectorAll(".select");
  const modal = document.getElementById("modal");

  selectReward.forEach(function (button) {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.classList.add("fixed");
    });
  });
}

const submitButtons = document.querySelectorAll(".Continue");
const thankYouPage = document.getElementById("thankYouPage");
//pledges

function initializeLocalStorage() {
  if (localStorage.getItem("totalAmount") === null) {
    localStorage.setItem("totalAmount", 0);
  }
  if (localStorage.getItem("percentage") === null) {
    localStorage.setItem("percentage", 0);
  }
  if (localStorage.getItem("totalBackers") === null) {
    localStorage.setItem("totalBackers", 0);
  }
  if (localStorage.getItem("bambooPledge") === null) {
    localStorage.setItem("bambooPledge", 101);
  }
}
initializeLocalStorage();

let myTotals = document.getElementById("totals");
myTotals.innerHTML = localStorage.getItem("totalAmount");
let myBackers = document.getElementById("backersTwo");
myBackers.innerHTML = localStorage.getItem("totalBackers");
let myPercentage = document.getElementById("mypercentages");
myPercentage.value = localStorage.getItem("percentage");
//pledges left
let myBambooPledge = document.getElementById("bamboo100");
myBambooPledge.innerHTML = localStorage.getItem("bambooPledge");

// *************Event Listener**************//
// submit button
submitButtons.forEach(function (button) {
  button.addEventListener("click", ClickSubmitButton);
});

// submit button
function ClickSubmitButton(e) {
  const oldAmount = localStorage.getItem("totalAmount");
  const oldBackers = localStorage.getItem("totalBackers");
  const oldPercentage = localStorage.getItem("percentage");
  const oldBambooPledge = localStorage.getItem("bambooPledge");
  e.preventDefault();

  const pledgeBox = e.target.closest(".pledge");
  const dolarInput = pledgeBox.querySelector(".dolar");
  const value = parseFloat(dolarInput.value);

  let minPledgeAmount = 1;
  if (pledgeBox.classList.contains("box-two")) {
    minPledgeAmount = 25;
  } else if (pledgeBox.classList.contains("box-three")) {
    minPledgeAmount = 75;
  } else if (pledgeBox.classList.contains("box-four")) {
    minPledgeAmount = 200;
  }

  if (isNaN(value) || value < minPledgeAmount) {
    alert(
      `Please enter a valid pledge amount of at least $${minPledgeAmount}.`
    );
    dolarInput.value = "";
    return;
  }
  if (value > 100000) {
    alert("The maximum pledge amount is $100,000.");
    dolarInput.value = "";
    return;
  }
  const finalAmount = parseFloat(oldAmount) + parseFloat(value);
  if (finalAmount > 100000) {
    alert("The total pledge amount cannot exceed $100,000.");
    dolarInput.value = "";
    return;
  }
  localStorage.setItem("totalAmount", finalAmount);
  myTotals.innerHTML = localStorage.getItem("totalAmount");

  const newBackers = parseInt(oldBackers) + 1;
  localStorage.setItem("totalBackers", newBackers);
  myBackers.innerHTML = localStorage.getItem("totalBackers");
  const newPercentage = (finalAmount / 100000) * 100;
  localStorage.setItem("percentage", newPercentage);
  myPercentage.value = localStorage.getItem("percentage");

  const newBambooPledge = parseInt(oldBambooPledge) - 1;
  localStorage.setItem("bambooPledge", newBambooPledge);
  let myBambooPledge = document.getElementById("bamboo100");
  myBambooPledge.innerHTML = localStorage.getItem("bambooPledge");

  dolarInput.value = "";
}

//close modal
const closeIcon = document.querySelector(".close-icon");
closeIcon.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("fixed");
};

//open Thank you
const openThankYou = document.querySelectorAll(".Continue");
openThankYou.forEach(function (button) {
  button.addEventListener("click", () => {
    modal.style.display = "none";
    thankYouPage.style.display = "block";
  });
});
//close thank you
closeThankYouBtn.onclick = function () {
  thankYouPage.style.display = "none";
  document.body.classList.remove("fixed");
};

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

// Days counter
function updateCountdown() {
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 11, 17);
  const difference = targetDate - today;
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  document.getElementById("daysLeft").textContent = daysLeft;
  if (daysLeft < 0) {
    clearInterval(updateCountdown);
    document.getElementById("noDay").innerHTML = `<h1 id="daysLeft">N/A</h4>`;
  }
}
updateCountdown();

setInterval(updateCountdown, 1000 * 60 * 60 * 24);

// Open and close the Menu
const menuModal = document.getElementById("menu-modal");
const deleteMenu = document.getElementById("close_Menu_modal");
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("side-menu-modal");

//menu
menuToggle.addEventListener("click", () => {
  menuModal.style.display = "block";
  menuToggle.style.display = "none";
  deleteMenu.style.display = "block";
  sideMenu.style.display = "block";
  document.body.classList.add("fixed");
});

deleteMenu.addEventListener("click", () => {
  menuModal.style.display = "none";
  deleteMenu.style.display = "none";
  menuToggle.style.display = "block";
  sideMenu.style.display = "none";
});

//Bookmarked
const Bookmarked = document.querySelector(".bookmarked");
const bookmarkText = document.getElementById("bookmarkText");
const bottomButton = document.querySelector(".bottom");

bookmarkedButton.addEventListener("click", () => {
  if (bookmarkText.textContent === "Bookmark") {
    bookmarkText.textContent = "Bookmarked";
  } else {
    bookmarkText.textContent = "Bookmark";
  }
  bottomButton.classList.toggle("show-color");
});