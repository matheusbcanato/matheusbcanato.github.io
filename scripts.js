function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  function createScrollButton() {
    const scrollButton = document.createElement('div');
    scrollButton.classList.add('scroll-button');
    scrollButton.innerHTML = '&#8679;';
    document.body.appendChild(scrollButton);
  
    scrollButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    return scrollButton;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.navContent');
    const initialViewport = window.innerHeight;
  
    let scrollButton = null;
  
    function toggleScrollButtonVisibility() {
      if (!scrollButton) {
        return;
      }
  
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= initialViewport) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }
  
    window.addEventListener('scroll', toggleScrollButtonVisibility);
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetClass = removeAccents(link.textContent.toLowerCase());
        const targetElement = document.querySelector(`.${targetClass}-text-head`);
  
        if (targetElement) {
          const topOffset = targetElement.getBoundingClientRect().top;
          window.scrollBy({
            top: topOffset,
            behavior: 'smooth'
          });
        }
      });
    });
  
    scrollButton = createScrollButton();
    toggleScrollButtonVisibility(); // Para garantir que o botão esteja oculto inicialmente
  });
  