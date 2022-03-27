// boton de ir arriba

document.getElementById('ir-arriba').addEventListener('click', botonArriba);

function botonArriba() {
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo (0, 0);
  }
}

buttonUp = document.getElementById('ir-arriba');

window.onscroll = function() {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 200) {
    buttonUp.style.transform = "scale(1)";
  }
  else if (scroll < 200){
    buttonUp.style.transform = "scale(0)";
  }
}

// fin del boton arriba