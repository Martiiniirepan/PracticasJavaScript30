const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; // ancho y alto al tamaño de la ventana
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply'; Se empalman los colores hasta verse negro

let isDrawing = false;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // detener la funcion para dibujar cuando el mause no
  // esta abajo
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // colores de la linea
  ctx.beginPath();
  // iniciar en estas coordenadas
  ctx.moveTo(lastX, lastY);
  // dibujas hasta estas coordenadas
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];// las coordenadas donde se va a dibujar
  //van a see iguales a donde se encuentra el cursor

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction; // se modifica el ancho de la linea
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

canvas.addEventListener('mousedown', (e) => { // se dibija cuando el mouse esta abajo
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);