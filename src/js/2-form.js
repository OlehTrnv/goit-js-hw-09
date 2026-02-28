const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name) {
        formData[name] = value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", handleSubmit = (event) => {
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
});