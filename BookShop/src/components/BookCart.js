import React,{ Component } from 'react';
import * as $ from 'jquery';
import 'bootstrap';

const BookCart = ({title,author,price,image})=>(
        <div className={" border  col-lg-4"} >
                <img src={image} alt="No image" className={"bookimage"} width={"150px"}/>
                <div className={"widthBookInfo"}>
                    <h6>{title}</h6>
                </div>
                <div className={"widthBookInfo"}>
                    Автор: {author}
                </div>
                <div className={"widthBookInfo"}>
                    Цена:{price}
                </div>
                <button className={"widthBookInfo"}>Добавить в корзину</button>
        </div>



)
export default BookCart;