var input = document.getElementById('input_comment');
var result = document.getElementById('result');
var button = document.getElementById('button_send_comment')






button.onclick=function() { //Вешаем обработчик на нажатие кнопки
	if(input.value !=""){	//проверка на наличие сообщения в поле ввода
		var time = document.createElement('time')
		time.innerText = new Date().toLocaleString();
		var comment_user = document.createElement('div')//создание тега в котором будут находиться комментарии
		comment_user.setAttribute("class", "block_new_comments" );//добавляем класс
        comment_user.appendChild(time);
		var text_comments = document.createElement('div')
        text_comments.setAttribute("class", "text_comments" );
        comment_user.appendChild(text_comments);
        result.appendChild(comment_user)//закидываем тек с коментарием в блок
		text_comments.innerHTML = input.value//Добавляем текст
		input.value = null;
	}
}

function SendOnKey(e) {
	e = e||window.event;
	if ( e.keyCode == 13 && e.ctrlKey && input.value !="") {
		var time = document.createElement('time')
		time.innerText = new Date().toLocaleString();
		var comment_user = document.createElement('div')//создание тега в котором будут находиться комментарии
		comment_user.setAttribute("class", "block_new_comments" );//добавляем класс
        comment_user.appendChild(time);
		var text_comments = document.createElement('div')
        text_comments.setAttribute("class", "text_comments" );
        comment_user.appendChild(text_comments);
        result.appendChild(comment_user)//закидываем тек с коментарием в блок
		text_comments.innerHTML = input.value//Добавляем текст
		input.value = null;
        }
}





