function openForm() {
    let drinks_purchased = parseInt(localStorage.getItem("drinks-purchased"));
    // update drink purchased count on local storage
    drinks_purchased = drinks_purchased + 1;
    localStorage.setItem("drinks-purchased", drinks_purchased);

    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }