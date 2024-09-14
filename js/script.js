
const images = [
    "assets/img10.jpeg",
    "assets/img9.jpeg",
    "assets/img8.jpeg",
    "assets/img7.jpeg",
    "assets/img6.jpeg",
    "assets/logo2.png",
    "assets/img4.jpg",
    "assets/img3.jpg",
    "assets/gif.gif",
    "assets/ballena.jpg",
    "assets/brenda.jpg",
    "assets/huaxtla.jpg",
    "assets/skin.png",
];

// Función para comprobar si la imagen tiene una extensión válida
function isValidImage(image) {
    // Obtener la extensión del archivo
    const extension = image.split('.').pop().toLowerCase();
    // Comprobar si es .jpg o .png
    return extension === 'jpg' || extension === 'png';
}

// Referencia a la tabla
const table = document.getElementById('imageTable');
let row;

let validImageCount = 0;  // Contador de imágenes válidas

images.forEach((image) => {
    if (isValidImage(image)) {
        if (validImageCount % 4 === 0) {
            // Crear nueva fila cada 4 imágenes válidas
            row = document.createElement('tr');
            table.appendChild(row);
        }
        // Crear una celda y añadir la imagen
        const cell = document.createElement('td');
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('gallery-image');  // Añadir clase específica a las imágenes de la galería
        cell.appendChild(imgElement);
        row.appendChild(cell);

        validImageCount++;
    }
});
