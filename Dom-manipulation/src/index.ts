const userForm = document.querySelector(".user-form")!;


const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;

userForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const data = {
        username: userName.value,
        useremail: userEmail.value,
        userCountry: userCountry.value
    }
    console.log(data);
})

