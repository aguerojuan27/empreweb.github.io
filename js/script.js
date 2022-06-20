window.onscroll = function () {
  scroll = document.documentElement.scrollTop;

  header = document.getElementById("header");

  if (scroll > 20) {
    header.classList.add("nav_mod");
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
  }
};

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});

// Scroll up  // lleva el scroll al inicio

/*document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 8));
    }
}
*/
buttonUp = document.getElementById("button-up");

// Hace visible el btn-up
function ScrollShow() {
  const ScrollShow = document.getElementById("button-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) ScrollShow.classList.add("show-scroll");
  else ScrollShow.classList.remove("show-scroll");
}
window.addEventListener("scroll", ScrollShow);

//  Categorías
const categorias = document.querySelectorAll("#categorias .categoria");
const contenedorPreguntas = document.querySelectorAll(".contenedor-preguntas");
let categoriaActiva = null;

categorias.forEach((categoria) => {
  categoria.addEventListener("click", (e) => {
    categorias.forEach((elemento) => {
      elemento.classList.remove("activa");
    });

    e.currentTarget.classList.toggle("activa");
    categoriaActiva = categoria.dataset.categoria;

    // Activamos el contenedor de preguntas que corresponde
    contenedorPreguntas.forEach((contenedor) => {
      if (contenedor.dataset.categoria === categoriaActiva) {
        contenedor.classList.add("activo");
      } else {
        contenedor.classList.remove("activo");
      }
    });
  });
});

//  Preguntas frecuentes

const preguntas = document.querySelectorAll(".preguntas .contenedor-pregunta");
preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("activa");

    const respuesta = pregunta.querySelector(".respuesta");
    const alturaRealRespuesta = respuesta.scrollHeight;

    if (!respuesta.style.maxHeight) {
      // Si esta vacio el maxHeight entonces ponemos un valor.
      respuesta.style.maxHeight = alturaRealRespuesta + "px";
    } else {
      respuesta.style.maxHeight = null;
    }

    // [Opcional] Reiniciamos las demas preguntas
    preguntas.forEach((elemento) => {
      // Solamente queremos ejecutar el codigo para las preguntas que no
      // sean la pregunta a la que le dimos click.
      if (pregunta !== elemento) {
        elemento.classList.remove("activa");
        elemento.querySelector(".respuesta").style.maxHeight = null;
      }
    });
  });
});

/*! =================================================*/
/*! ============= Modal ============= */
/*! =================================================*/

/* const openModal = document.getElementById("work1");
const openModal2 = document.getElementById("work2");
//
const modal = document.querySelector(".modal");
//
const modal2 = document.querySelector(".modal2");

const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
// Cerrar modal con tecla esc
document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal--show")) {
    document.querySelector(".modal--show").classList.remove("modal--show");
  }
});
// Modal 2
openModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
}); */
//
//
//
////// Modal PRUEBA /////
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//	Intersection Observer
const section1 = document.getElementById("services");
const section2 = document.getElementById("box");
const section3 = document.getElementById("box1");
const section4 = document.getElementById("box2");
const section5 = document.getElementById("box3");
const section6 = document.getElementById("box4");
const section7 = document.getElementById("box5");
const section8 = document.getElementById("box6");

const cargarSection = (entradas, observador) => {
  // console.log(entradas)
  // console.log(observador)

  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible", "box-visible");
    } else {
      //entrada.target.classList.remove('visible');
    }
  });
};

const observador = new IntersectionObserver(cargarSection, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});

observador.observe(section1);
observador.observe(section2);
observador.observe(section3);
observador.observe(section4);
observador.observe(section5);
observador.observe(section6);
observador.observe(section7);
observador.observe(section8);
