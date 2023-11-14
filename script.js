const services = document.querySelectorAll('.service');

services.forEach((service) => {
    service.addEventListener('mouseenter', () => {
        service.style.transform = 'scale(1.1)';
    });

    service.addEventListener('mouseleave', () => {
        service.style.transform = 'scale(1)';
    });
});
