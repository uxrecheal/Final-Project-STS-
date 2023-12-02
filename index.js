
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        let isValid = true;

        const requiredFields = document.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                isValid = false;
                displayError(field, 'This field is required');
            } else {
                hideError(field);
            }
        });

        // Additional email validation
        const emailField = document.getElementById('email');
        if (!isValidEmail(emailField.value.trim())) {
            isValid = false;
            displayError(emailField, 'Invalid email address');
        } else {
            hideError(emailField);
        }
        if (!isValid) {
            e.preventDefault();
        }
    });
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function scrollToInfo(){
    document.getElementById("info").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToProjects(){
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrolltoSkills(){
    document.getElementById("skills").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
