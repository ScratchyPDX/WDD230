const requestURL = 'data/data.json';
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const index1 = randomIntFromInterval(0, 3).toFixed(0);
const index2 = randomIntFromInterval(4, 6).toFixed(0);
const index3 = randomIntFromInterval(7, 9).toFixed(0);

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const filtered_members = jsonObject["members"].filter(member => member.member_status === "silver" || member.member_status === "gold" );
    displayMember(filtered_members[index1], 'div.card1');
    displayMember(filtered_members[index2], 'div.card2');
    displayMember(filtered_members[index3], 'div.card3');
  });

function displayMember(member, card_location) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let businessName = document.createElement('h2');
  businessName.className = "heading2"
  let logo = document.createElement('img');
  let logo_anchor = document.createElement('a');
  logo_anchor.href = member.website;
  logo_anchor.target = "_blank";
  let workPhone = document.createElement('h3');
  workPhone.className = "phone";
  
  // Change the textContent property of the h2 element to contain the prophet's full name
  businessName.textContent = `${member.business_name}`;
  workPhone.textContent = `${member.work_phone}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', member.logo);
  logo.setAttribute('alt', `Logo of ${member.business_name}`);
  logo.setAttribute('loading', 'lazy');
  logo_anchor.appendChild(logo);
  // Add/append the section(card) with the h2 element
  member.website ? card.appendChild(logo_anchor) : card.appendChild(logo);
  card.appendChild(businessName);
  card.appendChild(workPhone);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector(`${card_location}`).appendChild(card);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
