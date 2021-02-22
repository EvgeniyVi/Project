import React, { Component } from 'react';
import '../../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom';  
const history = createHistory();



class BeautifulPlacesWorld extends Component{
	render(){
		return(
        
      <div className="wrapper">
              <div className="InsideWrapper">
                <div className="HeadComponent"> 
                  <p>Самые красивые места Мира</p>
                </div>
                  <div className="ContentComponent">
                    <h2 className="HeadContentComponentEngland" >Долина Йосемити</h2>
                    <p>Горную местность долины украшает обилие хрустальных водопадов, чистейших озёр и бурной растительности.
                     Для туристов на обширной территории долины расположена масса отелей, кемпингов и прочих благ цивилизации..</p>
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/1-Yosemite_Valley-e1528945436839.jpg"}/>
          
                    <hr/>
          
                    <h2 className="HeadContentComponentEngland">Цветные скалы Чжанъе Данксиа, Китай</h2>
                    <p>Геологический парк в китайской провинции Ганьсу известен необычным природным сокровищем — красочными горными образованиями из 
                    разноцветных пород песчаника и конгломератов, 
                    относящихся преимущественно к Меловому периоду. Около сотни миллионов лет назад на месте гор был природный бассейн, который позже высох,
                     а его осадок окислился, приняв необычайно красивую пёструю расцветку.
                    </p>
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/2-Zhangye_Danxia_Landform-e1528945590663.jpg"}/>
                  
                    <hr/>

                    <h2 className="HeadContentComponentEngland">Монастырский комплекс Метеоры, Греция</h2>
                    <p> Уникальные монастыри буквально вырастают из горной породы, венчая вершины скал.
                     Сами скалы являются частью древней горной системы Фессалии, расположенной в историческом регионе Греции. 
                     Около 60 млн лет назад на месте скал располагалось море, 
                    а сегодня Метеоры является одним из самых ценных и священных исторических мест, с точки зрения христианской религии.
                    </p>
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/4-Meteora-e1528945892973.jpg"}/>

                    <hr/>
                    <h2 className="HeadContentComponentEngland">Бамбуковый лес, Япония</h2>
                    <p> В сердце городских ландшафтов Киото расположился
                     живописный уголок природы — густая бамбуковая роща, состоящая из бесчисленного количества бамбуковых деревьев.
                      На внушительной площади есть где разгуляться, поэтому лес стал излюбленным местом отдыха горожан и приезжих. 
                      В темное время суток парк подсвечивается сотнями маленьких фонариков и завораживает своим сказочным видом..
                    </p>
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/3-Sagano_bamboo_forest-e1528945736776.jpg"}/>

                       <hr/>
                    <h2 className="HeadContentComponentEngland">Храм Ват Ронг Кхун, провинция Чианграй, Таиланд.</h2>
                    <p> Более известный как Белый храм, поскольку выполнен из материалов белого цвета. 
                    Это буддийское святилище возведенное в 1997 году по художественному проекту Чалермчао Коситпипата.
                    </p>
                    <img src={"http://i0.wp.com/poznavatelno.net/wp-content/uploads/2015/05/12121.png?resize=801%2C507"}/>

              </div>
            </div>
          </div>
        


    

			)
	}
}

export default BeautifulPlacesWorld;

