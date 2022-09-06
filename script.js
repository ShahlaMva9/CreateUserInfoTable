const name = document.querySelector("#exampleInputName");
const surName = document.querySelector("#exampleInputSurName");
const email = document.querySelector("#exampleInputEmail1");
const password = document.querySelector("#exampleInputPassword1");
const repeatPassword = document.querySelector("#exampleInputPassword2");
const formBlock = document.getElementById("form");
const table = document.querySelector(".table");
const formInfo = [name, surName, email, password, repeatPassword];
let exucuted = true;

function reuqiredInput() {
  formInfo.forEach((i) => {
    i.required = true;
  });
}

function checkPassword() {
  while (password.value != repeatPassword.value) {
    alert("Password doesnt maatch");
    password.value = repeatPassword.value = "";
  }
}

class User {
  constructor(name, surName, email, password) {
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.password = password;
  }
}

function getFormValues() {
  const user1 = new User(
    name.value,
    surName.value,
    email.value,
    password.value
  );
  return user1;
}

function createTable() {
  const userInfo = getFormValues();
  if (exucuted) {
    const tableHeader = `
          <thead >
                  <tr> 
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>    
                  </tr>
                </thead>
       <tbody></tbody>
          `;
    table.innerHTML += tableHeader;
  }
  const tbody = document.querySelector("tbody");

  const tableContent = `
              <tr>
                  
                <td>${name.value}</td>
                <td>${surName.value}</td>
                <td>${email.value}</td>
                <td>${password.value}</td>
                <td>
                <button class="btn btn-danger delete-btn">delete</button>
                </td>

              </tr>
            `;

  tbody.innerHTML += tableContent;

  console.log(table);
}

function deleteTableElem() {
  createTable();
  const deleteBtn = document.querySelectorAll(".delete-btn");
  const tbody = document.querySelector("tbody");

  deleteBtn.forEach((i) => {
    i.addEventListener("click", function (e) {
      tbody.removeChild(e.target.parentElement.parentElement);
    });
  });
}

function initFunc() {
  formInfo.forEach((i) => (i.value = ""));
}

function sendForm(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  checkPassword();
  deleteTableElem();
  exucuted = false;
  initFunc();
}

formBlock.addEventListener("submit", sendForm);
reuqiredInput();
