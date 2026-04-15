document.getElementById("myForm").addEventListener("submit",
    function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const data = { name: name, email: email, password: password, dob: dob };

        console.log(data);

        if (!name || !password) {
            alert("Please provide your name and password.");
            return; // stops the function here
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "message.json");
        xhr.send();

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("myForm").innerHTML =
                    "<p>" + response.message + "</p>";
            }
        };

    });