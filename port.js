// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.querySelector('.navbar');
//     const homeSection = document.getElementById('home');

//     // Update navbar background on scroll
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.scrollY;
//         const homeOffset = homeSection.offsetTop;

//         // Check if scrolled to the home section or below
//         if (scrollTop < homeOffset + homeSection.offsetHeight) {
//             navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Transparent white for home section
//         } else {
//             navbar.style.backgroundColor = '#000'; // Black for other sections
//         }
//     });
// });

function validateAndSendMail(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var number = document.getElementById('number').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !number || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    sendMail(name, email, number, message);
    return false;
}

function sendMail(name, email, number, message) {
    var params = {
        name: name,
        number: number,
        email: email,
        message: message
    };

    const serviceID = 'service_tn9r288';
    const templateID = 'template_1jdkxp6';

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Your message has been sent successfully!');
        })
        .catch((err) => {
            console.error('Error sending email:', err);
        });
}



document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element once it is visible
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}); 




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openPdfBtn').addEventListener('click', function() {
        window.open('assets/nasni-resume.pdf', '_blank');
    });
});
