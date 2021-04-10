
import {React,Component} from 'react'
import './Style/Style_App.css';
import Table_Invoices from './components/Table_Invoices'
import Create_Invoices from './components/Create_Invoices';


class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      loading:"",
      isOpened:false
    }
  }

  componentDidMount() {
    this.getLists();
  }


  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3000/invoices")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            data: result
          })
        )
        .catch(console.log);
    })
  }

  

  onClick(){
    this.setState({isOpened: true });
  }
  viewCreate(){
    this.setState({isOpened:false})
  }

  render(){   
    
    return (
      <div className="Container">
        <div className="App">
        <p> Invoices</p>
          <div className="Add_New">
            Action
            <br/>
            <button onClick={()=>this.onClick()} className="button_add" >Add New</button>
          </div>
          
          <Table_Invoices info = {this.state.data} func={()=>this.getLists()}/>
          { this.state.isOpened ?  <Create_Invoices func={()=>this.getLists()} view={()=>this.viewCreate()} /> : null }
        </div>
        
       </div> 
        
    );
  }
}


export default App;
