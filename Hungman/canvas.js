export function hangman(count){
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

