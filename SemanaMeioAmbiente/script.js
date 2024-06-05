// script.js

document.querySelector('.scroll-container').addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        event.preventDefault();
        document.querySelector('.scroll-container').scrollLeft += event.deltaY;
    }
});
