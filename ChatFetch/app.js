var nextMessageId = 0;
 function jsonPost(url, data) {
         return new Promise((success,error)=>{
                var methAndBody = { 
                    method:'POST',
                    body:JSON.stringify(data)
                    }
         try{
             fetch(url,methAndBody)
            .then(response=>response.json())
            .then((res)=>success(res))
        }catch(error){
           console.log("Не удалось получить ответ сервера")
         }

}

)}


//Функция нажатия кнопки и отправки сообщения в чат
submit.onclick =async function() {
     await jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage',nick: nick.value,message: message.value})
    addMessage();
      nick.value ="";
    message.value = "";
    ;
}
//вызов окна чата,и добавление последнего сообщения
async function showMessage(){
   await jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages",messageId: 0})
}
 showMessage();

setInterval(addMessage, 3000)// обновление каждые три секунды

//создание див для каждого сообщения,и очистка окна при обновлении
function newMessage(data) {

    chat.innerHTML = " ";
    for (value of data.data) {
        var div = document.createElement("div");
        chat.insertBefore(div, chat.firstChild)
        div.innerHTML = "<b>" + value.nick  + ":"+ value.message +  "</b>"+ " " 
        + "<i>" + new Date(value.timestamp) + "</i>"
        ;

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










// // Генераторы
// // function* gena(){
// //     yield 1;
// // }

// // function*gena(){
// //     console.log("odyn")
// //     yield 1;
// //     console.log("dva")
// //     yield 2;
// // }

// // let gena()
