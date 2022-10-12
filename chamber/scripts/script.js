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
  document.getElementById("join-us").style.display = "block";
}
else {
  document.getElementById("join-us-message").style.display = "none";
}