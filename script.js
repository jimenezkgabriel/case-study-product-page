const ctaButton = document.getElementById('cta-btn');
const signUpSection = document.getElementById('signup');

//smoooth scroll from cta button to signup
if (ctaButton && signUpSection) {
    ctaButton.addEventListener('click', () => {
        signUpSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });
    });
}

// form submission handler w/alert
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // so page wont reload
        
        const nameInput = document.getElementById('name');
        const emailInput