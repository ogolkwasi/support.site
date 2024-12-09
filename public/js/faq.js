// Script to toggle FAQ answers with smooth animation
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle the active class
            item.classList.toggle('active');

            // Close all other answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});



// Smooth Scroll for Contact Button
document.querySelector('.footer-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

/// Get all links in the sidebar and content sections
const tocLinks = document.querySelectorAll('.vertical-toc a');
const contentSections = document.querySelectorAll('.content-section');

// Add a click event to each link in the sidebar
tocLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove the active class from all links and content sections
        tocLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active', 'animated'));

        // Add the active class to the clicked link
        link.classList.add('active');

        // Show the corresponding content section with a fade-in animation
        const targetContent = contentSections[index];
        targetContent.classList.add('active', 'animated');
    });
});




function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 20, // Adjust offset if needed
        behavior: 'smooth'
    });
}


