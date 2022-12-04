
// local storage exercise
const drinks_purchased = localStorage.getItem("drinks-purchased");

let drinks_purchased_element = document.getElementById("drinks-purchased");
let purchases_to_go_element = document.getElementById("purchases-to-go");

let number_of_drinks_purchased = 0;
if(drinks_purchased > 0) {
  number_of_drinks_purchased = drinks_purchased;
}

drinks_purchased_element.textContent = number_of_drinks_purchased;


let number_of_drinks_span = document.createElement('span');
let begin_text = document.createElement('span');
let number_text = document.createElement('span');
let end_text = document.createElement('span');
let number_of_drinks_to_go = 10;

if(drinks_purchased % number_of_drinks_to_go > 0) {
  number_of_drinks_to_go = number_of_drinks_to_go - (drinks_purchased % number_of_drinks_to_go);
  begin_text.textContent = `Only `;
  number_text.textContent = `${number_of_drinks_to_go}`;
  number_text.id = "drink-emphasis";
  end_text.textContent = " more before your next free one!";
  number_of_drinks_span.appendChild(begin_text);
  number_of_drinks_span.appendChild(number_text);
  number_of_drinks_span.appendChild(end_text);
}
else {
  begin_text.textContent = `Your next drink is `;
  end_text.textContent = "FREE!";
  end_text.id = "drink-emphasis";
  number_of_drinks_span.appendChild(begin_text);
  number_of_drinks_span.appendChild(end_text);
}
purchases_to_go_element.appendChild(number_of_drinks_span);