document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < viewportHeight && rect.bottom > 0;
    };

    const onScroll = () => {
        serviceItems.forEach(item => {
            if (isInViewport(item) && !item.classList.contains("active")) {
                item.classList.add("active");
            }
        });
    };

    let timeout;
    const throttleScroll = () => {
        if (!timeout) {
            timeout = setTimeout(() => {
                onScroll();
                timeout = null;
            }, 100);
        }
    };

    window.addEventListener("scroll", throttleScroll);
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