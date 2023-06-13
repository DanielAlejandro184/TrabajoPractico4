/* Asignacion de variables */

const imagenes = document.querySelectorAll('.contenedorImagenes .Imagenes')
let contPrevisualizado = document.querySelector('.contImgZoom')
let imgPresentada = contPrevisualizado.querySelector('img')
let descripcion = contPrevisualizado.querySelector('.parrafo')
let btnClose = contPrevisualizado.querySelector('.btnCerrar')
let contFig = document.querySelectorAll('.contenedorImagenes .Figuras')

/* Creacion de funciones y recorrido de las imagenes */

window.onload = ()=>{

    /* Recorrido del Array */

    for(let i = 0; i < imagenes.length; i++){
        let indiceNuevo = i
        let imgElegida 
        contFig[i].onclick = ()=>{
            imgElegida = indiceNuevo

            /* Funcion asignadora de la imagen clickeada */

            function visualizar(){
                let urlSeleccionada = imagenes[indiceNuevo].src
                imgPresentada.src = urlSeleccionada 
                descripcion.innerHTML = imagenes[indiceNuevo].alt
                console.log(urlSeleccionada)
            }

            /* Asignacion de botones imagen previa y imagen siguiente */

            const btnAtras = document.querySelector('.izq')
            const btnAdel = document.querySelector('.der')

            if(indiceNuevo == 0){
                btnAtras.style.display = 'none'
            }
            if(indiceNuevo >= imagenes.length - 1){
                btnAdel.style.display = 'none'
            }

            /* Funcion boton previo */

            btnAtras.onclick = ()=>{
                indiceNuevo--
                if(indiceNuevo == 0){
                    visualizar()
                    btnAtras.style.display = 'none'
                }else{
                    visualizar()
                    btnAdel.style.display = 'block'
                }
            }

            /* Funcion boton siguiente */

            btnAdel.onclick = ()=>{
                indiceNuevo++
                if(indiceNuevo >= imagenes.length - 1){
                    visualizar()
                    btnAdel.style.display = 'none'
                }else{
                    visualizar()
                    btnAtras.style.display = 'block'
                }
            }

            visualizar()
            contPrevisualizado.classList.add('moverCont')
            document.querySelector('body').style.overflow = 'hidden'

            /* Funcion de boton cerrar */

            btnClose.onclick = ()=>{
                indiceNuevo = imgElegida
                btnAtras.style.display = 'block'
                btnAdel.style.display = 'block'
                contPrevisualizado.classList.remove('moverCont')
                document.querySelector('body').style.overflow = 'auto'
            }
        }
    }
}

/* Fin del Js */

/* Fin del proyecto */