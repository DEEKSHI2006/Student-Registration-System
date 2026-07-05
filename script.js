const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const hobbies = [];

    document.querySelectorAll('input[name="hobbies"]:checked').forEach((item) => {
        hobbies.push(item.value);
    });

    const student = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        gender: document.querySelector('input[name="g"]:checked').value,
        hobbies: hobbies,
        department: document.getElementById("dept").value,
        address: document.getElementById("address").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        if (result.success) {

            alert("Student Details Saved Successfully!");

            form.reset();

            window.location.href = "submit.html";

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to backend!");

    }

});