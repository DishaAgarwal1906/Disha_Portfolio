function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_z0g9zi9", "template_ob6j69u", params)
        .then(function (res) {
            alert("Success! " + res.status);
        });
}
