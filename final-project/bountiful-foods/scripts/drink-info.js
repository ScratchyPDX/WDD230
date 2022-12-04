const requestURL = 'data/drink-data.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    populateSelectControls(jsonObject, '#fruit1');
    populateSelectControls(jsonObject, '#fruit2');
    populateSelectControls(jsonObject, '#fruit3');
  });

  function populateSelectControls(drinks, controlId) {
    let select = document.querySelector(controlId)
    for(let x in drinks) {
      let option =  document.createElement("option")
      option.innerHTML = drinks[x].name;
      option.value = drinks[x].name;
      select.appendChild(option);
    }
    select.selectedIndex = -1;
  }
