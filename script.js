let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; // Get the actual height
        let id = sec.getAttribute('id'); // Get the section ID

        if (top >= offset && top < offset + height) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to the matching link
            // Use querySelector carefully, ensure href matches '#' + id
            let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky header logic (if you add one later)
    // ...

    // Remove toggle icon and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
