// Материал с занятия
var canvas = document.getElementById('canvas')
var ctx    = canvas.getContext('2d')

var width  = canvas.width;
var height = canvas.height;

function Drawable(){
   Drawable.addInstance(this);   
}

Drawable.prototype.draw = function(){};
Drawable.instances = [];
Drawable.addInstance = function(item){
    Drawable.instances.push(item);
}

Drawable.drawAll = function(){
    ctx.clearRect(0,0,width,height);
    Drawable.forAll(item => item.draw())
}

Drawable.forAll = function(callback){
    for(var i = 0; i<Drawable.instances.length;i++){
        callback(Drawable.instances[i])
    }
}



class Circle extends Drawable {
    constructor(x,y,radius,color){
        super()

        radius = +radius

        this.setX = newX => (x = newX, this.draw())
        this.getX = () => x

        this.setY = newY => (y = newY, this.draw())
        this.getY = () => y

        this.setRadius = newRadius => (radius = +newRadius, this.draw())
        this.getRadius = () => radius

        this.setColor = newColor => (color = newColor, this.draw())
        this.getColor = () => color

        this.draw = () => {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI*2);
            ctx.fillStyle = color
            ctx.fill();
        }

        this.draw();
    }

    get x(){
        return this.getX()
    }

    set x(newX){
        this.setX(newX)
    }

    get y(){
        return this.getY()
    }

    set y(newY){
        this.setY(newY)
    }

    get radius(){
        return this.getRadius()
    }

    set radius(newRadius){
        this.setRadius(newRadius)
    }

    get color(){
        return this.getColor()
    }

    set color(newColor){
        this.setColor(newColor)
    }

    getDistance(x, y){
        let distance = Math.sqrt((this.x - x)**2 + (this.y - y)**2)
        return distance < this.radius ? distance : Infinity;
    }
}

tools = {
    circle(evt){
        if (evt.buttons & 1){
            //draw(evt);
            new Circle(evt.offsetX, evt.offsetY, radius.value, color.value)
        }
    },
    select(evt){
        if (evt.buttons & 1){
            //some select code
            let sorted = [...Drawable.instances]
            let {offsetX:x, offsetY: y} = evt;
            sorted.sort((a,b) => a.getDistance(x,y) > b.getDistance(x,y) ? 1 : -1)
            //console.log(sorted[0], sorted[0].getDistance(x,y))
            //console.log(sorted[1], sorted[1].getDistance(x,y))
            if (sorted[0].getDistance(x,y) < Infinity){
                sorted[0].radius = radius.value
                sorted[0].color = color.value
            }
            else {
                console.log('not in circle')
            }
        }
    }
}

canvas.onmousemove = function(evt){
    tools[tool.value](evt)
    Drawable.drawAll()
}



//Домашнее задание
// var canvas = document.getElementById('canvas')//Обращение к HTML элементу
// var ctx    = canvas.getContext('2d')// выбор режима рисования

// var width  = canvas.width;//Переменная Высоты canvas
// var height = canvas.height;//переменная ширины Canvas

// function Drawable(){
//    Drawable.addInstance(this); //Функция рисовалки с методом this  
// }

// Drawable.prototype.draw = function(){};
// Drawable.instances = [];
// Drawable.addInstance = function(item){
//     Drawable.instances.push(item);
// }

// Drawable.drawAll = function(){
//     ctx.clearRect(0,0,width,height);
//     Drawable.forAll(item => item.draw())
// }

// Drawable.forAll = function(callback){
//     for(var i = 0; i<Drawable.instances.length;i++){
//         callback(Drawable.instances[i])
//     }
// }

// class Circle extends Drawable {// Название класса и extendts родителя
//     constructor(x,y,radiusAndWidth,color){//создать параметры в скобках
//         super()// Функция вызывающая родительский конструктор то есть(Drawable)

//         radiusAndWidth = +radiusAndWidth

//         this.setX = newX => (x = newX, this.draw())//Функция которая записывает значение свойства по иксу и передает в this.draw
//         this.getX = () => x//Функция которая возвращает значение свойства this.draw

//         this.setY = newY => (y = newY, this.draw())//Функция которая записывает значение свойства по игрику и передает в this.draw
//         this.getY = () => y//Функция которая возвращает значение свойства this.draw

//         this.setRadius = newRadius => (radiusAndWidth = +newRadius, this.draw())//Функция которая записывает значение свойства радиуса,указаного пользователем и записывает в значение this.draw
//         this.getRadius = () => radius//Функция которая возвращает значение свойства radius

//         this.setColor = newColor => (color = newColor, this.draw())//Функция которая записывает значение свойства цвета,выбраного пользователем и передает в this.draw
//         this.getColor = () => color//Функция которая возвращает значение свойства color

//         this.draw = () => {
//             ctx.beginPath();//начало нового элемента
//             ctx.arc(x, y, radiusAndWidth, 0, Math.PI*2);// создание круга и запись его параметров(значение по иксу,по игрику,радиус,построение против часовой стрелки)
//             ctx.fillStyle = color//заливка с цветом выбраным пользователем в инпут
//             ctx.fill();//отрисовка круга
//         }

//         this.draw();//вызов функции со всеми задаными параметрами
//     }

//     get x(){//функция x возвращает значение переданное в this.getX
//         return this.getX()
//     }

//     set x(newX){//функция x записывает значения переданные в setX(newX) но стоит еще разобраться
//         this.setX(newX)
//     }

//     get y(){//функция y возвращает значение переданное в this.getY
//         return this.getY()
//     }

//     set y(newY){//функция y записывает значение переданное в this.setY
//         this.setY(newY)
//     }

//     get radius(){//функция возвращает значение getRadius
//         return this.getRadius()
//     }

//     set radiusAndWidth(newRadius){//Записывает значение радиуса setRadius(newRadius)
//         this.setRadius(newRadius)
//     }

//     get color(){//возвращает значение цвета выбраного пользователем
//         return this.getColor()
//     }

//     set color(newColor){//записывает цвет выбраный пользователем setColor(newColor)
//         this.setColor(newColor)
//     }

//     getDistance(x, y){//создание функции для проверки оттдаленности курсора от нарисованой точки
//         let distance = Math.sqrt((this.x - x)**2 + (this.y - y)**2)//переменная дистанциия
//         return distance < this.radiusAndWidth ? distance : Infinity;//если значение переменной дистанции меньше чем радиус нарисованой точки
//         //то с помощью тернарного оператора выбираем действие!!infinity - бесконечность
//     }
// }

// let tools = {
//     circle(evt){//это  value = "circle" в HTML
//         if (evt.buttons & 1){//если кнопка нажата
//             //draw(evt);
//             new Circle(evt.offsetX, evt.offsetY, radiusAndWidth.value, color.value)//новая точка,с задаными параметрами
//         }
//     },
//     select(evt){
//         if (evt.buttons & 1){
//             //some select code
//             let sorted = [...Drawable.instances]
//             let {offsetX:x, offsetY: y} = evt;
//             sorted.sort((a,b) => a.getDistance(x,y) > b.getDistance(x,y) ? 1 : -1)
//             //console.log(sorted[0], sorted[0].getDistance(x,y))
//             //console.log(sorted[1], sorted[1].getDistance(x,y))
//             if (sorted[0].getDistance(x,y) < Infinity){
//                 sorted[0].radiusAndWidth = radiusAndWidth.value
//                 sorted[0].color = color.value
//             }
//             else {
//                 console.log('not in circle')
//             }
//         }
//     }
// }

// canvas.onmousemove = function(evt){
//     tools[tool.value](evt)
//     Drawable.drawAll()
// }



