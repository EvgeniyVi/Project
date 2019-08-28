let socket = io.connect();
let $form = $("#messForm")
let $name = $("#name")
let $textarea = $("#message")
let $all_message = $("#all_message")
let $typing = $("#typing");
let $messageInput = $("#message")


//add message in list
$(function() {
    $form.submit((event) => {
        event.preventDefault();
        socket.emit('send mess', {message: $textarea.val(), name: $name.val()});
        $textarea.val('');
        return false;
    })
    socket.on('add mess', (data) => {
        $all_message.append("<div><b>" + data.name + " </b>: " + data.message + "</div>")
    });


//add message in dataBase
    $(function () {
        fetch("/Chats")
            .then(data => {
                return data.json();
            })
            .then(json => {
                json.map(data => {
                    $all_message.append("<div><b>" + data.name + " </b>: " + data.message + "</div>")
                });
            });
    });
});

//Check typing

$messageInput.bind("keypress",()=>{
    socket.emit("typing",{name:$name.val(), message:" is typing"})
});
socket.on("notifyTyping", data=>{
    $typing.text(data.name + data.message)
});
$messageInput.bind("keyup",()=>{
    socket.emit("stopTyping","")
});
socket.on("notifyStopTyping",()=>{
    $typing.text("")
})

