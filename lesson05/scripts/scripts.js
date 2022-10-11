const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", () =>  {
  const current_input = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button2 = document.createElement("button");

  li.appendChild(span);
  span.textContent = current_input;
  li.appendChild(button2);
  button2.textContent = "❌";
  ul.appendChild(li);
  
  button2.addEventListener("click", () => {
    ul.removeChild(li);
  })
  
  input.focus();
});