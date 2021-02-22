import React,{ Component } from 'react';
import {connect} from 'react-redux'
import './store'
import Header from './components/header'
import BookCart from './components/BookCart'
import {SET_BOOKS} from './actions/books'



class App extends Component {

    componentDidMount() {
        const {SET_BOOKS} = this.props
        fetch('./book.json').then(response => {
            return response.json();
        }).then(data => {
            SET_BOOKS(data)
        }).catch(err => {
            console.log("New Error")
        })}

    render(){
    const { books } = this.props
        return(
            <div>
                <Header/>
                <div className={" forbook row col-lg-10 mx-auto"}>
                    {books.map((mybook,index)=>{
                        return(
                            <BookCart {...mybook}/>
                        )
                    })}
                </div>


            </div>
        )
    }
}

const mapStateToProps= ({books})=>({
        books:books.items,
        isLoading: books.isLoading
})

const mapDispatchToProps = dispatch=>({
    SET_BOOKS:books => dispatch(SET_BOOKS(books))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
