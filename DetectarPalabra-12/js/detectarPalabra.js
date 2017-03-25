const pressed = []; // arreglo que guarda las teclas presionadas
const secretCode = 'web'; // palabra que se va a buscar al teclear

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);// inserta las teclas presionadas en el arreglo
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) { // si se encuentra la palabra secreta
    console.log('DING DING!'); // manda mensaje
    cornify_add(); // añade imagen de pony
  }
  console.log(pressed);
});