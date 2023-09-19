$('.services__section-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  function animateValue(id, start, end, duration) {
    const range = end - start;
    const increment = range / duration;
    const element = $('#' + id);

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      element.text(Math.round(current)); // Round to avoid decimal precision issues
      if (current >= end) {
        clearInterval(timer);
        element.text(end);
      }
    }, 10);
  }

  // Función para manejar el evento de scroll
  function handleScroll() {
    const serviciosSection = $('#servicios');
    const windowBottom = $(window).scrollTop() + $(window).height();
    const sectionTop = serviciosSection.offset().top;

    if (windowBottom >= sectionTop) {
      animateValue("years", 0, 2, 300);
      animateValue("servicesdone", 0, 200, 400);
      animateValue("happyclients", 0, 70, 400);
      $(window).off('scroll', handleScroll); // Detener el evento de scroll una vez activado
    }
  }

  // Agregar un event listener para el evento de scroll
  $(window).on('scroll', handleScroll);

  // Efecto ScrollReveal

  ScrollReveal().reveal('.scroll-reveal', { duration: 1000, origin: 'bottom', distance: '50px' });
