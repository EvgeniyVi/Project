import React,{ Component } from 'react';
import {connect} from 'react-redux'
import './store'
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
                <ul>
                    {books.map((book,index)=>{
                        return(
                            <li key={index}>{book.author} - {book.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps= ({books})=>({
        books:books.items
})

const mapDispatchToProps = dispatch=>({
    SET_BOOKS:books => dispatch(SET_BOOKS(books))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
