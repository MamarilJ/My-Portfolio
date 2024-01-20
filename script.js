document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const name = document.getElementById('name');
    const role = document.getElementById('role');
    const intro = document.getElementById('intro');
    const skills = document.getElementById('skills');
    const email = document.getElementById('email');
    const github = document.getElementById('github');

    // Add click event to header for animation
    header.addEventListener('click', function () {
        name.style.color = getRandomColor();
        role.style.color = getRandomColor();
        header.style.backgroundColor = getRandomColor();
    });

    // Add click events to clickable elements for animation
    const elements = [name, role, intro, skills, email, github];
    elements.forEach(element => {
        element.addEventListener('click', function () {
            element.style.color = getRandomColor();
        });
    });

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
