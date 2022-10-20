
const wind_chill = document.getElementById("wind_chill");
const temp = parseInt(document.getElementById("temperature").textContent);
const wind = parseInt(document.getElementById("wind_speed").textContent);

if (temp <= 50 && wind >= 3) {
    let chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    wind_chill.textContent = `${Math.round(chill).toString()}\u00B0F`;
}
else {
    wind_chill.textContent = "N/A";
}
