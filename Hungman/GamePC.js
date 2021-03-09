
window.onload=function () {
  
  
    let count_letter = id("count_letter");
    let repeat = id("repeat_word");
    let start = id('start');
    let win_or_lose = id("commentComputer");
    let attempted = id("attempted");
    let newRemainingLetters = " ";//переменная для подсчета жизней
    let remainigLetters = " ";//переменная для подсчета жизней
    let lives = null;
    let  word_length = null;//количество букв в слове
    let curr_word = null; // Текущее слово (строка)
    let guessed_letters = null; // Массив угаданных бук
    var canvas = id("canvas");


let output = id("ok_word");


let words = [
  "лошадь",
   "удав",
   "кровать", 
   "телевизор", 
   "сервис",
   "командир", 
   "бамбук", 
   "клоун", 
   "инквизитор", 
   "балабол", 
   "клад", 
   "загадка", 
   "танк"
  ];

/***/
id("start").addEventListener("click", function () {
  win_or_lose.innerText = " ";
  lives = 7;
  curr_word = get_random_word();
  guessed_letters = new Array(curr_word.length);

//указываем количество букв
  remainigLetters = curr_word.length;//количество букв
  newRemainingLetters = remainigLetters;// подсчет жизней
  word_length = curr_word.length;
  count_letter.innerText = `Осталось ${remainigLetters} из  ${word_length}`;
//

  attempted.innerText = `${lives}  жизней `;//количвество оставшихся жизней
  output.textContent = "";
  console.log(curr_word); 
//
const context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height);
});

function get_random_word() {
return words[Math.random() * words.length | 0];
}

/***/
id("input_user").addEventListener("input", function () {
if (!this.value) return; // Не ввели букву (например, Backspace)

let input = this.value[0].toLowerCase();
let result = "";

if((lives !== 0) && (remainigLetters>0)){ 
  for (let i = 0; i < curr_word.length; i++) {
    if(guessed_letters[i] === input){
      repeat.innerText="yes" + guessed_letters[i];
      setTimeout(()=>{
        repeat.innerText=" "
      },3000)
      remainigLetters++;
    }
    let letter = curr_word[i];
      if (input === letter) { // Буква совпала?
        guessed_letters[i] = letter; // Cохранить в массиве угаданных.
        remainigLetters--;
      }
      if (guessed_letters[i]) {// Заодно в том же цикле сразу собирается строка из всех ранее угаданных.
        result += letter;
      }  
      else {
       result += " _ "; // Можно показывать пустые "клетки
      }
  }
      
      if (remainigLetters === newRemainingLetters) {
        lives--;            
        hangman(lives);
      }
      newRemainingLetters = remainigLetters;
      attempted.innerText = `${lives}  жизней `
      count_letter.innerText = `Осталось ${remainigLetters} из  ${word_length}`;
}
   
      if (lives === 0) {
        win_or_lose.innerText=`У Вас закончились жизни,было загадано слово: ${curr_word}`;
      } else if(remainigLetters === 0){
        win_or_lose.innerText = `Да,Вы угадали слово :  ${curr_word}`;
      } 

    output.textContent = result;

    setTimeout(() => this.value = "", 100);
      // Пусть удаляется чуть позже, чтобы ощущалось, что ввод сработал.
    });

/***/
  function id(str) {
     return document.getElementById(str);
  }

//
 function hangman(count){
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(50,100);
	ctx.lineTo(50,50);
	ctx.lineTo(200,50);
	ctx.lineTo(200,450);
	ctx.lineTo(50,450);
	ctx.lineTo(50,400);
	ctx.lineTo(200,400);
	ctx.stroke();
	
//человек	
	if (count === 5){
	//голова
  ctx.beginPath();
  ctx.arc(50, 120, 20, 0, 2 * Math.PI, false);
  ctx.stroke();
	};
	
	//тело
	if (count === 4){
	ctx.beginPath();
	ctx.moveTo(50,140);
	ctx.lineTo(50,250);
	ctx.stroke();
	};
	
	//руки
	if(count === 3){
		//левая
	ctx.beginPath();
	ctx.moveTo(50,180);
	ctx.lineTo(5,160);
	ctx.stroke();
	};
		//правая
	if(count === 2){
	ctx.beginPath();
	ctx.moveTo(50,180);
	ctx.lineTo(95,160);
	ctx.stroke();
	};
	//ноги
		//левая
	if(count === 1){
	ctx.beginPath();
	ctx.moveTo(50,250);
	ctx.lineTo(25,310);
	ctx.stroke();
	};
		//правая
	if(count === 0){
	ctx.beginPath();
	ctx.moveTo(50,250);
	ctx.lineTo(75,310);
	ctx.stroke();
	}; 
	 };


}