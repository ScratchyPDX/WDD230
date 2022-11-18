const requestURL = 'data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];
    members.forEach(displayMembers);
  });

function displayMembers(member) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let businessName = document.createElement('h2');
  businessName.className = "heading2"
  let logo = document.createElement('img');
  let logo_anchor = document.createElement('a');
  logo_anchor.href = member.website;
  logo_anchor.target = "_blank";
  let workPhone = document.createElement('h3');
  workPhone.className = "phone"
  let emailAddress = document.createElement('h3');
  emailAddress.className = "email"
  
  // Change the textContent property of the h2 element to contain the prophet's full name
  businessName.textContent = `${member.business_name}`;
  workPhone.textContent = `${member.work_phone}`;
  emailAddress.textContent = `${member.work_email}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', member.logo);
  logo.setAttribute('alt', `Logo of ${member.business_name}`);
  logo.setAttribute('loading', 'lazy');
  logo_anchor.appendChild(logo);
  member.website ? card.appendChild(logo_anchor) : card.appendChild(logo);

  // Add/append the section(card) with the h2 element
  card.appendChild(businessName);
  card.appendChild(workPhone);
  card.appendChild(emailAddress);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

/*buttons*/
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards-grid");

listbutton.addEventListener("click", () => {
    display.classList.add("cards-list");
    display.classList.remove("cards-grid");
});

gridbutton.addEventListener("click", () => {
    display.classList.add("cards-grid");
    display.classList.remove("cards-list");
})
