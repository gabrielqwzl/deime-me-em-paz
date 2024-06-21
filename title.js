let x = 0;
const title = [];
const nick = 'deixe-me em paz';
for (let i = 1; i <= nick.length; ++i) {
  title.push(nick.slice(0, i));
}
for (let i = 1; i < nick.length; ++i) {
  title.push(nick.slice(0, -i));
}
title.push('‎'); // Certifique-se de que '‎' é uma string válida e não apenas caracteres invisíveis
function loop() {
  document.getElementsByTagName('title')[0].innerHTML = title[x++ % title.length];
  setTimeout(loop, 250);
}
loop();
