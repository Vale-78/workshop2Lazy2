
const isIntersecting = (entry) => entry.isIntersecting;  //Creo función que llamé más abajo.Recibe un entry de la lista(array)
    //quiero la propiedad isIntersecting sea true (si está dentro de la pantalla) y false caso contrario
    //ej, Si está 200px lejos de la pantalla, haz algo

const loadImage = (entry) => {
    const container =entry.target; //container es el target del elemento de entrada del array
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //pido que cargue imagen
    imagen.src = url;
    container.className = "containerImg"
    //ya mostraste primera interseccion con viewspor entonces quiero que dejes de escucharla. Sólo quiero que me avises la primera vez que se ve cada imagen
    observer.unobserve(container);//deja de observar el container
} ;


const observer = new IntersectionObserver((entries) => {//me pasará todas las entradas que escuche en ese momento( all elements)
    //las entradas son un array
    entries.filter(isIntersecting).forEach(loadImage) //filtramos por las imágenes que están intersecando con el viewport
        //por cada elemento que está en la pantalla haremos una acción
})


//como a las imágenes las tengo en otro archivo, voy a exportar
export const registerImage = (imagen) => {
    //intersactionObserver=> observer(imagen)
 observer.observe(imagen);
 //observador(api intersection obs)  quiero que observes esta imagen
}