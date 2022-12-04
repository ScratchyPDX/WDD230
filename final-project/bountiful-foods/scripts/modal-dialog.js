function openForm() {
  let drinks_purchased = parseInt(localStorage.getItem("drinks-purchased"));
  // update drink purchased count on local storage
  if(isNaN(drinks_purchased)) {
    drinks_purchased = 0;
  }
  drinks_purchased = drinks_purchased + 1;
  localStorage.setItem("drinks-purchased", drinks_purchased);

  // open model dialog and display order summary
  document.getElementById("myForm").style.display = "block";
  document.getElementById("submit-button").style.display = "none";
}

function closeForm() {
  location.reload();;
  document.getElementById("myForm").style.display = "none";
}