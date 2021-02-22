var nextMessageId = 0;
function jsonPost(url, data) {
    return new Promise((resolve,reject)=>{
        var x = new XMLHttpRequest();
        x.onerror = ()=>reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = ()=>{
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
                resolve(JSON.parse(x.responseText))
            } else if (x.status != 200) {
                reject(new Error('status is not 200'))
            }
        }
    }
    )

}

//Функция нажатия кнопки и отправки сообщения в чат
submit.onclick = function() {
    jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage',nick: nick.value,message: message.value})
    addMessage();
}
//вызов окна чата,и добавление последнего сообщения
jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages",messageId: 0})
.then(data=>{newMessage(data), nextMessageId = data.data.nextMessageId});

setInterval(addMessage, 3000)// обновление каждые три секунды

//создание див для каждого сообщения,и очистка окна при обновлении
function newMessage(data) {
    chat.innerHTML = " ";
    for (value of data.data) {
        var div = document.createElement("div");
        chat.insertBefore(div, chat.firstChild)
        div.innerHTML = "<b>" + value.nick + "</b>" + ":" + "<b>" + value.message +  "</b>"+ " " 
        + "<i>" + new Date(value.timestamp) + "</i>";
    }
}

// проверка чата на длинну и обновления с новыми сообщениями
//messageId : nextMessageId - это было сделано что бы добавлялись только новые сообщения при обновлении страницы,а не клонировался ввесь список старых
function addMessage() {
    jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId: nextMessageId})
    .then(data=>{
        if (data.data.length !== 0) {
            newMessage(data)
         }
        }
    )

}
