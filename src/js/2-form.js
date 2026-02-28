const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
    const parsed = JSON.parse(savedData);

    formData.email = parsed.email || "";
    formData.message = parsed.message || "";

    const emailInput = form.querySelector("[name='email']");
    const messageInput = form.querySelector("[name='message']");

    if (emailInput) {
        emailInput.value = formData.email;
    }

    if (messageInput) {
        messageInput.value = formData.message;
    }
}

form.addEventListener("input", handleInput);
function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name) {
        formData[name] = value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
    }
    else {
        console.log(formData);
        form.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    }
}


