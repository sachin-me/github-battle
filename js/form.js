function createForm() {
  let formDiv = document.createElement('div');
  formDiv.classList.add('formDiv');
  let form1 = document.createElement('form');
  form1.innerHTML =  `
    <label for="">Player One</label>
    <input type="text" class="user1-text" />
    <button class="user1-btn">Submit</button>
  `
  let form2 = document.createElement('form');
  form2.innerHTML =  `
    <label for="">Player Two</label>
    <input type="text" class="user2-text" />
    <button class="user2-btn">Submit</button>
    `
    formDiv.appendChild(form1);
    formDiv.appendChild(form2);
  return formDiv;
}




