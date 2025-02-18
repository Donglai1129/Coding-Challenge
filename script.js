document.addEventListener("DOMContentLoaded", function () {
    function createScrollingEffect(selector, speed) {
        const strip = document.querySelector(selector);
        const text = strip.querySelector(".scrolling-text");

        text.innerHTML += " " + text.innerHTML;

        let position = 0;
        function scroll() {
            position -= speed;
            if (position <= -text.scrollWidth / 2) {
                position = 0;
            }
            text.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(scroll);
        }
        scroll();
    }

    createScrollingEffect(".strip1", 1);
    createScrollingEffect(".strip2", 1.5);
    createScrollingEffect(".strip3", 2);
});
