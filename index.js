function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_nulob2v","template_0so6uec", params);
}