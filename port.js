document.addEventListener('DOMContentLoaded', function () {
    var text = "Hello, I'm a seasoned Fullstack Python Developer with a focus on Django. Equipped with a solid foundation in data analysis, my goal is to contribute innovative solutions to complex projects. My expertise spans the entire development stack, allowing me to seamlessly navigate frontend and backend intricacies. I thrive in dynamic, collaborative environments and am dedicated to delivering impactful results through my technical skills and analytical mindset. Let's connect and explore how I can bring value to your team and contribute to the success of our projects.";
    var element = document.querySelector('.text[d="typing-effects"]');
    typeWriter(element, text, 0);
});   
function typeWriter(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
            typeWriter(element, text, index);
        }, 10);
    }
}
var tablinks=document.getElementsByClassName("tab-links")
var contents=document.getElementsByClassName("contents")
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (content of contents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can perform further validation here if needed

    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        message: message
    };
    console.log(formData);
    document.getElementById('myForm').reset();
}
