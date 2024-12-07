document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");

    // Función para verificar si un elemento es visible en el viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    };

    // Función que aplica la clase 'active' cuando las tarjetas están visibles
    const onScroll = () => {
        serviceItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add("active");
            }
        });
    };

    // Escucha del evento scroll
    window.addEventListener("scroll", onScroll);

    // Ejecuta la función al cargar la página para elementos visibles inmediatamente
    onScroll();
});




