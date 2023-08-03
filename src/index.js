import { registerImage } from "./lazi";

const min = 1
const max = 122
//crea un numero aleatorio para traer las imagenes
const random = () => Math.floor(Math.random() * (max - min)) + min;

// reporte en consola de cuantos argumentos han traido y estan cargados
const reportImgs = {
    imgLoaded: 0,
    totalImg: 0,
}

const stopContentLoader = (event) => {
    const imagen = event.target;
    // imagen.parentElement.lastChild.remove();
    
    reportImgs.imgLoaded++;
    
    // debugger;
    showReportImg();
}

const showReportImg = () => {
    console.log('----------------------------------------')
    console.log(`%c⚪Total Imgs: ${reportImgs.totalImg}`, 'color: blue; font-size: 0.8rem');
    console.log(`%c🟣Total Cargadas: ${reportImgs.imgLoaded}`, 'color: hotpink; font-size: 0.8rem');
    console.log('----------------------------------------')
}

const allElementsDeleted = () => {
    console.log(`⚠ Todas las imagenes fueron eliminadas`);
}



const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4'; //Pading igual a 4 pixeles- propiedad de Taiwild

    const imagen = document.createElement('img');
    imagen.className= 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`; //Falta modificar el 3 para que sea dinámico
    
    imagen.onload = stopContentLoader; //onload llama una funcion
    container.append(imagen)
    
    return container;
};
   
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);

    reportImgs.totalImg ++ ;
    showReportImg();
}      
           

const removeImg = () => {
    mountNode.innerHTML = "";
    reportImgs.imgLoaded = 0;
    reportImgs.totalImg = 0;
    
    allElementsDeleted();
}

const nuevaImagen = createImageNode();
const mountNode = document.querySelector('#images');

const addButton = document.querySelector("button");
//quiero que en cada click aparezca una imagen

const eliminarImgs = document.querySelector("#buttonLimpiar");
addButton.addEventListener("click", addImage);
eliminarImgs.addEventListener("click", removeImg);
eliminarImgs.type = "reset";