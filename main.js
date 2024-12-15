document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    };

    const onScroll = () => {
        serviceItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add("active");
            }
        });
    };

    // Escucha del evento scroll
    window.addEventListener("scroll", onScroll);

    onScroll();
});

document.querySelector('.cold-button').addEventListener('click', () => {
    document.body.classList.add('cold-theme');
    document.body.classList.remove('warm-theme');
});

document.querySelector('.warm-button').addEventListener('click', () => {
    document.body.classList.add('warm-theme');
    document.body.classList.remove('cold-theme');
});

document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove();
                }
            });
        },
        {
            root: null,
            threshold: 0.1,
        }
    );
    serviceItems.forEach((item) => observer.observe(item));
});
