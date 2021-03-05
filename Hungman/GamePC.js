
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
        count_letter.innerText = `Осталось ${remainigLetters} из  ${word_length}`;
        if (remainigLetters === newRemainingLetters) {
          lives--;            
        }
        newRemainingLetters = remainigLetters;
        attempted.innerText = `${lives}  жизней `
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
}