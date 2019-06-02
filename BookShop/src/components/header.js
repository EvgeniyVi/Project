import React,{ Component } from 'react';
import * as $ from 'jquery';
import 'bootstrap';
class Header extends Component{
    render(){
        return(
            <div className={"col-lg-10 mx-auto"}>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Магазин книг</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Каталог <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Корзина:<b>0</b></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  " href="#">Итого<b>0</b></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

        export default Header;