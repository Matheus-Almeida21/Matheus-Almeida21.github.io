//Arrastar com o mouse
function initDragToScroll() {
  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}
initDragToScroll();

//voltar ao topo
function scrollToTop() {
  const element = document.querySelector('.backToTop');

  element.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

//revelar ao scroll
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('ativo');
    } else {
      reveal.classList.remove('ativo');
    }
  });
}
reveal();
window.addEventListener('scroll', reveal);

//deixar menu responsivo
function initMobileMenu() {
  const hamburguerMenu = document.querySelector('.menu');
  const menu = document.querySelector('#header');
  const menuIsActive = () => {
    hamburguerMenu.classList.toggle('on');
    menu.classList.toggle('on');
  };
  hamburguerMenu.addEventListener('click', menuIsActive);
}
initMobileMenu();

//fechar menu mobile ao clicar no item
function exitMobileMenu() {
  const hamburguerMenu = document.querySelector('.menu');
  const menu = document.querySelector('#header');
  const links = Array.from(document.querySelectorAll('#navigation li a'));
  links.forEach((link) => {
    link.addEventListener('click', () => {
      hamburguerMenu.classList.remove('on');
      menu.classList.remove('on');
    });
  });
}
exitMobileMenu();

//seleciona section atual
function selectAtualSection() {
  const links = Array.from(document.querySelectorAll('#navigation li a'));

  const sections = links.map((link) => {
    const atributo = link.getAttribute('href');
    return document.querySelector(`${atributo}`);
  });
  console.log(sections);

  const windowMetade = window.innerHeight;
  function selectSection() {
    sections.forEach((section, index) => {
      const elementTop = section.getBoundingClientRect().top;
      const altura = section.clientHeight - 20;
      const calculo = -altura * 2;

      if (
        elementTop - altura - 20 <= -altura &&
        elementTop - altura >= calculo
      ) {
        links[index].classList.add('ativado');
      } else {
        links[index].classList.remove('ativado');
      }
    });
  }
  window.addEventListener('scroll', selectSection);
}
selectAtualSection();

//animação ao enviar formulário
function initFormSubmit() {
  const button = document.querySelector('#form-button');
  const form = document.querySelector('form');

  form.addEventListener('submit', () => {
    button.innerText = 'Enviando...';
  });
}
initFormSubmit();
