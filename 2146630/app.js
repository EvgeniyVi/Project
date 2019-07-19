var input = document.getElementById('input_comment');
var result = document.getElementById('result');
var button = document.getElementById('button_send_comment')





button.onclick=function() { //Вешаем обработчик на нажатие кнопки
	if(input.value !=""){	//проверка на наличие сообщения в поле ввода



		var time = document.createElement('time')
		result.appendChild(time)
		time.innerHTML = (Date());


		var comment_user = document.createElement('div')//создание тега в котором будут находиться комментарии
		comment_user.setAttribute("class", "block" );//добавляем класс

		result.appendChild(comment_user)//закидываем тек с коментарием в блок
		comment_user.innerHTML = input.value//Добавляем текст
		input.value = null;
	}

}

function SendOnKey(e) {
	e = e||window.event;
	if ( e.keyCode == 13 && e.ctrlKey && input.value !="") {
		var comment_user = document.createElement('p')
		comment_user.setAttribute("class", "block" );
		result.appendChild(comment)
		comment_user.innerHTML = input.value
		input.value = null;
        }
}



