window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
      
    menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})

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
function ScrollShow(){
    const ScrollShow = document.getElementById('button-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) ScrollShow.classList.add('show-scroll'); else ScrollShow.classList.remove('show-scroll')
}
window.addEventListener('scroll', ScrollShow)



//  Categorías
const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activamos el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});

//  Preguntas frecuentes

const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});


