function openForm() {
  incrementPurchaseCount();
  
  // open model dialog and display order summary
  const firstName = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;
  const instructions = document.getElementById("instructions").value;

  populateConfirmationInfo(firstName, email, phone, fruit1, fruit2, fruit3, instructions);
  calculateNutritionInfo(fruit1, fruit2, fruit3);

  document.getElementById("form-popup").style.display = "block";
  document.getElementById("submit-button").style.display = "none";
}

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("submit-button").style.display = "block";
}

function incrementPurchaseCount() {
  let drinks_purchased = parseInt(localStorage.getItem("drinks-purchased"));
  // update drink purchased count on local storage
  if(isNaN(drinks_purchased)) {
    drinks_purchased = 0;
  }
  drinks_purchased = drinks_purchased + 1;
  localStorage.setItem("drinks-purchased", drinks_purchased);
}

function populateConfirmationInfo(firstName, email, phone, fruit1, fruit2, fruit3, instructions) {
  document.getElementById("conf-fname").textContent = firstName;
  document.getElementById("conf-email").textContent = email;
  document.getElementById("conf-phone").textContent = phone;
  document.getElementById("conf-fruit1").textContent = fruit1;
  document.getElementById("conf-fruit2").textContent = fruit2;
  document.getElementById("conf-fruit3").textContent = fruit3;
  document.getElementById("conf-instructions").textContent = instructions;
}

function calculateNutritionInfo(fruit1, fruit2, fruit3) {
  const requestURL = 'data/drink-data.json';
  
  fetch(requestURL) 
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      let fruit1_data = jsonObject.filter(fruit => fruit.name == fruit1)[0];
      let fruit2_data = jsonObject.filter(fruit => fruit.name == fruit2)[0];
      let fruit3_data = jsonObject.filter(fruit => fruit.name == fruit3)[0];

      const carbs = fruit1_data.nutritions.carbohydrates + fruit2_data.nutritions.carbohydrates + fruit3_data.nutritions.carbohydrates;
      const protein = fruit1_data.nutritions.protein + fruit2_data.nutritions.protein + fruit3_data.nutritions.protein;
      const sugar = fruit1_data.nutritions.sugar + fruit2_data.nutritions.sugar + fruit3_data.nutritions.sugar;
      const calories = fruit1_data.nutritions.calories + fruit2_data.nutritions.calories + fruit3_data.nutritions.calories;
      const fat = fruit1_data.nutritions.fat + fruit2_data.nutritions.fat + fruit3_data.nutritions.fat;
      document.getElementById("carbs").textContent = carbs;
      document.getElementById("protein").textContent = protein;
      document.getElementById("sugar").textContent = sugar;
      document.getElementById("calories").textContent = calories;
      document.getElementById("fat").textContent = fat;
    });
  }
  