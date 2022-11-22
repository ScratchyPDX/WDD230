const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();

// set footer dates
document.getElementById("today-date").textContent = `${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last_modified").innerHTML = `Last modified: ${document.lastModified}`;

// toggle hamburger menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// Join us message based on day of the week
if (weekday[date.getDay()] == "Monday" || weekday[date.getDay()] == "Tuesday") {
  document.getElementById("join-us-message").style.display = "block";
}
else {
  document.getElementById("join-us-message").style.display = "none";
}

// lazy loading of images
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => { image.removeAttribute("data-src");};
};


if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// local storage exercise
const last_visited_date = localStorage.getItem("last-visit-date");
const todays_date = Date.now();
const total_number_of_days_since_last_visit = Math.ceil((todays_date - last_visited_date) / 86400000);

let last_visited_element = document.getElementById("last-visited-in-days");
if(total_number_of_days_since_last_visit > 0) {
  last_visited_element.textContent = `You last visited this site ${total_number_of_days_since_last_visit} day(s) ago`;
}
else {
  last_visited_element.textContent = "This is your first visit to our site. Welcome!"
}
localStorage.setItem("last-visit-date", todays_date);

let transactionDate = document.getElementById("transaction-date");
if(transactionDate !== null){
  transactionDate.value = todays_date;
}
