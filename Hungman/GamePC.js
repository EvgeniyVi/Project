
window.onload=function () {

    let div = document.getElementById("ok_word");
    let count_letter = document.getElementById("count_letter");
    let start = document.getElementById('start');
    let win_or_lose = document.getElementById("commentComputer");
    let attempted = document.getElementById("attempted");
    let words = ["лошадь", "удав", "кровать", "телевизор", "сервис", "командир", "бамбук", "клоун", "инквизитор", "балабол", "клад", "загадка", "танк"];
    let lives = " ";
    var newRemainingLetters = " ";
    var remainigLetters = " ";
    var answerArray = [];
  



   
    start.addEventListener("click", Get_Random_Word);

    function Get_Random_Word() {
        lives = 7;
    	  div.innerText = " ";//очищаем поле каждый раз при вызове функции
    	  count_letter.innerText = " ";

          curr_word_computer = words[Math.floor(Math.random() * words.length)];//рандомное слово
          console.log(curr_word_computer);
         answerArray = [];//массив для заполнения прочерками,букв которые неугаданы

        for(let i =0;i<curr_word_computer.length;i++){
        		answerArray[i] = "_";//создание прочерков,в зависимости от количества букв в рандомном слове
           }

        remainigLetters = curr_word_computer.length;//узнаем длину слова для того что бы показывать сколько отгадано и сколько осталось
        newRemainingLetters = remainigLetters;//дополнительная перменная для того что бы считать остаток неугаднных букв

        
    		attempted.innerText = lives + " жизней ";//количвество оставшихся жизней
    		div.innerText = answerArray.join(" "); //вывод подчеркивания вместо букв
    		count_letter.innerText = "Осталось" + " " + remainigLetters + " " + " из " +  newRemainingLetters;//сколько осталось угадать букв
    }

     
    input_user.addEventListener("input", compare);

    function compare() {
       if(!this.value) return;
       var input = this.value.toLowerCase();

    	
          if((remainigLetters>0) && (lives!==0)){

          for(let j = 0; j < curr_word_computer.length;j++ ){
          /*	if(curr_word_computer[j] === input){
          		answerArray[j] = input;
              console.log(answerArray[j]);
              div.innerText += answerArray[j];
          		remainigLetters--;
              count_letter.innerText = "Осталось" + " " + remainigLetters + " " + " из " + newRemainingLetters;
          	}*/
               if (answerArray[j] === input) {
                alert("Sorry, this letter is already there... try again :|")
                break;
            }
            // Проверяем угадали ли букву
            if(curr_word_computer[j] === input){
            answerArray[j] = input;
            div.innerText += answerArray[j++];
            remainigLetters--;
            
            }
          }  
          }
       
       if (remainigLetters === newRemainingLetters) {
        lives--; 
        attempted.innerText = lives + "жизней";
    }
        newRemainigLetters = remainigLetters;
        count_letter.innerText = "Осталось" + " " + remainigLetters + " " + " из " + newRemainingLetters;
        setTimeout(() => this.value = "", 200);

}
}

