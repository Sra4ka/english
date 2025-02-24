document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.windows img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('You clicked on: ' + this.alt);
        });
    });
});