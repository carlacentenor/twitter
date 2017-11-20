var btn = document.querySelector('#btn'); /*obtener el boton*/
btn.disabled = true; /*carga la pag con el boton deshabiitado*/
btn.setAttribute('class','btn-style');

var span = document.querySelector('span');
var textarea = document.querySelector('#text'); /*obtenemos el textarea*/
textarea.addEventListener('keydown', autosize);
textarea.addEventListener('keyup', validate);
textarea.addEventListener('keyup', countText);

/*evento que inicializa con una tecla*/
btn.addEventListener('click', sendTweet);

/*funcion que valida que no ingrese campos vacios ni espacios continuos*/
function validate() {
	if (textarea.value === '' || textarea.value==false ) { 
		btnDisabled();
	} else {
		btnEnabled();

	}
}
/**Función de Ajustar el TextArea deacuerdo al contenido */

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
   el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


/*funciones que habilitan y deshabilitan el boton*/
function btnDisabled() {
	btn.disabled = true;
	btn.style.backgroundColor = '#b9e1fa';
}

function btnEnabled() {
	btn.disabled = false;
	btn.style.backgroundColor = '#50b6f5';
}

/*función que crea el nuevo tweet y lo agrega al html*/
function sendTweet(event) {
	var textTweet = textarea.value;
	var newTweet = document.createElement('div');
	newTweet.setAttribute('class','tweet-style');
	newTweet.textContent = time() + '    ' + textTweet;
	var parent = document.querySelector('.container-tweets');
	parent.appendChild(newTweet);

	clear();
	validate();

}
/*función que limpia el textarea*/
function clear() {
	document.querySelector('#text').value = '';
	span.textContent = '';
}

/**Función de contador de caracteres  */
function countText() {
	var count = textarea.value.length;
	var show = 140 - count;
	span.textContent = show;
	var parent = document.querySelector('.post');
	parent.appendChild(span);
	if (count > 0 && count < 119) {
		span.style.color = '#50b6f5';
	} else if (count >= 120 && count <= 130) {
		span.style.color = "#f5b40d";
	} else if (count > 130 && count <= 140) {
		span.style.color = "red";
	} else {
		btnDisabled();
	}
}

/*Captura de la hora del Tweet*/ 
function time() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var time;
	if (min < 10) {
		min = '0' + min;
	}
	if (hours >= 12 && hours <= 24) {
		time = hours + ':' + min + ' PM';
	} else {
		time = hours + ':' + min + ' AM';
	}
	return time;
}
