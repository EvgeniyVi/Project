
window.onload=function () {

    let count_letter = id("count_letter");
    let start = id('start');
    let win_or_lose = id("commentComputer");
    let attempted = id("attempted");
    let words = ["лошадь", "удав", "кровать", "телевизор", "сервис", "командир", "бамбук", "клоун", "инквизитор", "балабол", "клад", "загадка", "танк"];
    let lives = 7;
    let newRemainingLetters = " ";
    let remainigLetters = " ";
    let curr_word = null; // Текущее слово (строка)
    let guessed_letters = null; // Массив угаданных букв
    


let output = id("ok_word");




/***/
id("start").addEventListener("click", function () {
  
  curr_word = get_random_word();
  guessed_letters = new Array(curr_word.length);

  //указываем количество букв
  remainigLetters = curr_word.length;//количество букв
  newRemainingLetters = remainigLetters;// количество букв которое остлось угадать
  count_letter.innerText = "Осталось" + " " + remainigLetters + " " +  "из" +" " +  newRemainingLetters;
  //

  attempted.innerText = lives + " жизней ";//количвество оставшихся жизней
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
 
  if(lives !==0 && remainigLetters>0){
    
  for (let i = 0; i < curr_word.length; i++) {
    let letter = curr_word[i];

    if (input === letter) { // Буква совпала?
      guessed_letters[i] = letter; // Cохранить в массиве угаданных.
      remainigLetters--;
    }
    
    if (guessed_letters[i]) {
      // Заодно в том же цикле сразу собирается строка из всех ранее угаданных.
      result += letter;
      
    } else {
      result += " _ "; // Можно показывать пустые "клетки"
    }
  }
  }
  count_letter.innerText = "Осталось" + " " + remainigLetters + " " +  "из" +" " +  newRemainingLetters;
  
  output.textContent = result;

  if (result === curr_word) {
    console.log("Угадано");
  }
  
  setTimeout(() => this.value = "", 200);
  // Пусть удаляется чуть позже, чтобы ощущалось, что ввод сработал.
});

/***/
function id(str) {
  return document.getElementById(str);
}
}