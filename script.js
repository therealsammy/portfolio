// Navbar toggle

const header = document.querySelector('#header');
const navbarLinks = document.querySelectorAll(".navbar-link");
const navToggleBtn = document.querySelector("#nav-toggle-btn");

navToggleBtn.addEventListener('click', () => {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
});


for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', () => {
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    })
};

/*************

BACK TO TOP

**************/

const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }
});

// const contactForm = document.querySelector("#contact-form");
// const contactFormName = document.querySelector("#contact-form-name");
// const contactFormEmail = document.querySelector("#contact-form-email");
// const contactFormText = document.querySelector("#contact-form-textarea");



// contactForm.addEventListener("submit", (e) => {

//     e.preventDefault();


// })

const contactForm = $("#contact-form");
const contactFormName = $("#contact-form-name").val();
const contactFormEmail = $("#contact-form-email").val();
const contactFormText = $("#contact-form-textarea").val();

contactForm.addEventListener("submit", (e) => {

    let name = contactFormName.trim();
    let email = contactFormEmail.trim();
    let text = contactFormText.trim();



    e.preventDefault();

    console.log(`My nam is ${name}`);

    $.ajax({
        url: './post.php',
        type: 'POST',
        data: {
            name: 'name',
            email: 'email',
            text: 'text'
        },
        success: () => {
            $("#contact-form-name").val("");
            $("#contact-form-email").val("");
            $("#contact-form-textarea").val("");
        }
    })


})