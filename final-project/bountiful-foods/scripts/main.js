// toggle hamburger menu
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");
x.onclick = toggleMenu;

const date = new Date();

// set footer dates
// document.getElementById("today-date").textContent = `${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last-modified").innerHTML = `Last modified: ${document.lastModified}`;
