const requestURL = 'data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject["members"];
    members.forEach(displayMembers);
  });

function displayMembers(member) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let businessName = document.createElement('h2');
  businessName.className = "heading2"
  let logo = document.createElement('img');
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

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(businessName);
  card.appendChild(workPhone);
  card.appendChild(emailAddress);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}