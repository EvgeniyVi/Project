var input = document.getElementById('input_comment');
var result = document.getElementById('result');
var button = document.getElementById('button_send_comment')





button.onclick=function() { //Вешаем обработчик на нажатие кнопки
	if(input.value !=""){	//проверка на наличие сообщения в поле ввода



		var time = document.createElement('time')
		result.appendChild(time)
		time.innerHTML = (Date());;

		var comment = document.createElement('div')//создание тега в котором будут находиться комментарии
		comment.setAttribute("class", "block" );//добавляем класс
		result.appendChild(comment)//закидываем тек с коментарием в блок
		comment.innerHTML = input.value//Добавляем текст
		input.value = null;


	}

}

function SendOnKey(e) {
	e = e||window.event;
	if ( e.keyCode == 13 && e.ctrlKey && input.value !="") {
		var comment = document.createElement('p')
		comment.setAttribute("class", "block" );
		result.appendChild(comment)
		comment.innerHTML = input.value
		input.value = null;
        }
}



