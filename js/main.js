// Agregar efecto de clic con ondas
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Animación del estudiante cuando se hace hover
const studentSvg = document.querySelector('.student-svg');
studentSvg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
});

studentSvg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});
