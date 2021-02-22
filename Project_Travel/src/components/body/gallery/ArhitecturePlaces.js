import React, { Component } from 'react';
import '../../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom';  
const history = createHistory();



class ArhitecturePlaces extends Component{
  render(){
    return(
        
       <div className="wrapper">
              <div className="InsideWrapper">
                <div className="HeadComponent"> 
                  <p>Самые красивые места Мира</p>
                </div>
                  <div className="ContentComponent">
                    <h2 className="HeadContentComponentEngland" >Пирамида Лувра, Париж, Франция</h2>
                    <p>Критики проекта считали, что дизайн пирамиды выглядит слишком современно и может внести диссонанс в архитектурный 
                    комплекс королевского дворца, но как выяснилось они ошибались. Новый проект не чуть не испортил традиционную архитектуру Парижа. 
                    На сегодня стеклянная пирамида считается одним из символов французской столицы и служит главным входом в Лувр.</p>
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/118.png?resize=801%2C493"}/>
          
                    <hr/>
          
                    <h2 className="HeadContentComponentEngland">Тадж-Махал, Агра, Индия.</h2>
                    <p>Переводится с персидского и арабского как «Корона дворцов». 
                    Это сооружение является завещанием, не только архитектуры, но и любви.
                     Тадж-Махал был построен как мавзолей императором Великих Моголов Шах-Джаханом для своей любимой супруги.
                    </p>
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/215.png?resize=801%2C658"}/>
                  
                    <hr/>

                    <h2 className="HeadContentComponentEngland">Великая пирамида в Гизе, Эль-Гиза, Египет.</h2>
                    <p> Время предположительного возведения датируется 2560 г. до нашей эры, но и в
                     наши дни пирамида Хеопса, по-прежнему скрывает тайны архитектурного подвига её создателей.
                    </p>
                    <img src={"http://i1.wp.com/poznavatelno.net/wp-content/uploads/2015/05/47.png?resize=801%2C492"}/>

                    <hr/>
                    <h2 className="HeadContentComponentEngland">Собор Святого Павла, Лондон, Великобритания.</h2>
                    <p> Собор является самым узнаваемым зданием на лондонском горизонте, поскольку расположен в самой высокой точке британской столицы — 
                    Ладгейт-Хилл. Проект протестантского собора разработан архитектором Кристофером
                     Реном в XVII веке и был частью целой серии восстановительных работ после Великого лондонского пожара 1666 года.
                    </p>
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/315.png?resize=800%2C546"}/>

                       <hr/>
                  <h2 className="HeadContentComponentEngland">Колизей, Рим, Италия.</h2>
                    <p> Строительство Колизея длилось 8 лет и завершилось в 80 г. н.э. 
                    Самый огромный амфитеатр всего античного мира мог вместить до 80000 зрителей и был использован в основном для гладиаторских соревнований.
                    </p>
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/65.png?resize=801%2C468"}/>

              </div>
            </div>
          </div>


    

      )
  }
}

export default ArhitecturePlaces;

