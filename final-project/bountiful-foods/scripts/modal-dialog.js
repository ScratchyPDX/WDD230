function openForm() {
  let drinks_purchased = parseInt(localStorage.getItem("drinks-purchased"));
  // update drink purchased count on local storage
  if(isNaN(drinks_purchased)) {
    drinks_purchased = 0;
  }
  drinks_purchased = drinks_purchased + 1;
  localStorage.setItem("drinks-purchased", drinks_purchased);

  // open model dialog and display order summary
  const firstName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;
  const instructions = document.getElementById("instructions").value;

  document.getElementById("conf-fname").textContent = firstName;
  document.getElementById("conf-email").textContent = email;
  document.getElementById("conf-phone").textContent = phone;
  document.getElementById("conf-fruit1").textContent = fruit1;
  document.getElementById("conf-fruit2").textContent = fruit2;
  document.getElementById("conf-fruit3").textContent = fruit3;
  document.getElementById("conf-instructions").textContent = instructions;
  calculateNutritionInfo(fruit1, fruit2, fruit3);

  document.getElementById("myForm").style.display = "block";
  document.getElementById("submit-button").style.display = "none";

}

function closeForm() {
  location.reload();;
  document.getElementById("myForm").style.display = "none";
}

function calculateNutritionInfo(fruit1, fruit2, fruit3) {
const requestURL = 'data/drink-data.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let fruit1_data = jsonObject.filter(fruit => fruit.name == fruit1);
    let fruit2_data = jsonObject.filter(fruit => fruit.name == fruit2);
    let fruit3_data = jsonObject.filter(fruit => fruit.name == fruit3);
    console.log(`fruit1_data: ${JSON.stringify(fruit1_data)}`)
    console.log(`fruit2_data: ${JSON.stringify(fruit2_data)}`)
    console.log(`fruit3_data: ${JSON.stringify(fruit3_data)}`)
  });
}