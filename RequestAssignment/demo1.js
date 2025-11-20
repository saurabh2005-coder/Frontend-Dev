function GetData() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneNumber = document.getElementById("phone").value.trim();
    let confirmPassword = document.getElementById("Confirmpassword").value;
    let password = document.getElementById("password").value;
    let country = document.getElementById("country").value;
    let terms = document.getElementById("terms").checked;
    let gendermale = document.getElementById("male").checked;
    let genderfemale = document.getElementById("female").checked;

    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    let passwordpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{7,15}$/;

    if (!name || !email || !phoneNumber || !confirmPassword || !password) {
        alert("Fields cannot be empty");
        return false;
    }
    if (!emailpattern.test(email)) {
        alert("Invalid email format");
        return false;
    }
    if (!gendermale && !genderfemale) {
        alert("Please select your gender");
        return false;
    }
    if (!terms) {
        alert("You must agree to the terms and conditions");
        return false;
    }
    if (phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
        alert("Phone number must be 10 digits long");
        return false;
    }
    if (country === "") {
        alert("Please select your country");
        return false;
    }
    if (!passwordpattern.test(password)) {
        alert("Password must be 7-15 characters long and include at least one numeric digit and a special character");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Optionally POST new user to local json-server signUp collection
    const payload = { name, email, phone: phoneNumber, gender: gendermale ? "male" : "female", country, password };

    // previous fetch call (commented out)
    /*
    fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Registered:", data);
        alert("Register successful. Data saved to local server.");
    })
    .catch(err => {
        console.error(err);
        alert("Error saving registration");
    });
    */

    // XHR implementation
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/signUp', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        console.log("Registered:", xhr.responseText);
    };
   const body = {
        email: email,
        password: password,
        phone: phoneNumber,
        name: name,
   }
    xhr.send(JSON.stringify(payload));

    return false;
}





