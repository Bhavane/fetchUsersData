let getButton = document.getElementById("getButton");
let getUsersList = document.getElementById("getUsersList");
let spinner=document.getElementById("spinner");

function appendToDiv(searchResults) {
    let spinner=document.getElementById("spinner");
    spinner.classList.add("d-none");
    let {
        id,
        email,
        first_name,
        last_name,
        avatar
    } = searchResults;
    let div = document.createElement("div");
    div.classList.add("listContainer","col-12","usersContainer");
    getUsersList.appendChild(div);

    let image = document.createElement("img");
    image.src = avatar;
    image.classList.add("avatarImage");
    div.appendChild(image);

    let firstName = document.createElement("h1");
    firstName.classList.add("heading");
    firstName.textContent = first_name;
    div.appendChild(firstName);

    let lastName = document.createElement("p");
    lastName.classList.add("heading2");
    lastName.textContent = last_name;
    div.appendChild(lastName);

    let emailId = document.createElement("p");
    emailId.classList.add("heading2");
    emailId.textContent = email;
    div.appendChild(emailId);

}

function getUsers() {
    let spinner=document.getElementById("spinner");
    spinner.classList.remove("d-none"); 
    let url = " https://reqres.in/api/users?page=1";
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            console.log(jsonData);
            for (let each of jsonData.data) {
                appendToDiv(each)
                
            }
        });
}


getButton.addEventListener("click", getUsers)