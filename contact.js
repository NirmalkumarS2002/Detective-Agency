const form = document.querySelector("form");

const nameInput = document.querySelector("#c-name");
const emailInput = document.querySelector("#c-mail");
const numberInput = document.querySelector("#c-num");
const purposeInput = document.querySelector("#c-purpose");
const messageInput = document.querySelector("#c-area");

const errorMsgs = document.querySelectorAll(".errormsg");

let submsg = document.querySelector(".submsg")

//=========================
// Restrict Name
//=========================

nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
});

//=========================
// Restrict Phone Number
//=========================

numberInput.addEventListener("input", () => {

    // Allow only numbers
    numberInput.value = numberInput.value.replace(/[^0-9]/g, "");

    // Maximum 10 digits
    if (numberInput.value.length > 10) {
        numberInput.value = numberInput.value.slice(0, 10);
    }

});

//=========================
// Validation
//=========================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    errorMsgs.forEach(msg => msg.textContent = "");

    let valid = true;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name

    if (nameInput.value.trim() == "") {

        errorMsgs[0].textContent = "Enter your name";
        valid = false;

    }
    else if (!nameRegex.test(nameInput.value.trim())) {

        errorMsgs[0].textContent = "Only letters are allowed";
        valid = false;

    }

    // Email

    if (emailInput.value.trim() == "") {

        errorMsgs[1].textContent = "Enter your email";
        valid = false;

    }
    else if (!emailRegex.test(emailInput.value.trim())) {

        errorMsgs[1].textContent = "Enter a valid email";
        valid = false;

    }

    // Phone

    if (numberInput.value.trim() == "") {

        errorMsgs[2].textContent = "Enter your phone number";
        valid = false;

    }
    else if (numberInput.value.length != 10) {

        errorMsgs[2].textContent = "Enter a valid 10-digit number";
        valid = false;

    }

    // Purpose

    if (purposeInput.value.trim() == "") {

        errorMsgs[3].textContent = "Enter the purpose";
        valid = false;

    }

    // Message

    if (messageInput.value.trim() == "") {

        errorMsgs[4].textContent = "Please describe your case";
        valid = false;

    }

    // Success

    if (valid) {
         submsg.style.display="block"
        setTimeout(() => {
            submsg.style.display="none"
        }, 2000);

        form.reset();

    }

});