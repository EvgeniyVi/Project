var input = document.getElementById('input_comment');
var result = document.getElementById('result');
var button = document.getElementById('button_send_comment')


/*function fullTime() {
	var monthArray = [
		"Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"
	]
	var dayArray = [
		"Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"
	]
	var dateObj = new Date();

	var year = dateObj.getFullYear();
	var month = dateObj.getMonth();
	var numDay = dateObj.getDate();
	var day = dateObj.getDay();
	var hour = dateObj.getHours();
	var minute = dateObj.getMinutes();
	var second = dateObj.getSeconds();

	if (minute < 10) minute = "0" + minute;

	if (second < 10) second = "0" + second;

	var out = daysArr[day] + ", " + numDay + " " + monthsArr[month]
		+ " " + year + ", " + hour + ":" + minute + ":" + second;

	return out;
}
}*/




button.onclick=function() { //Вешаем обработчик на нажатие кнопки
	if(input.value !=""){	//проверка на наличие сообщения в поле ввода

		var time = document.createElement('time')
		result.appendChild(time);
		time.innerText = new Date().toLocaleString();
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
		var time = document.createElement('time')
		result.appendChild(time);
		time.innerText = new Date().toLocaleString();
		var comment_user = document.createElement('div')//создание тега в котором будут находиться комментарии
		comment_user.setAttribute("class", "block" );//добавляем класс
		result.appendChild(comment_user)//закидываем тек с коментарием в блок
		comment_user.innerHTML = input.value//Добавляем текст
		input.value = null;
        }
}





