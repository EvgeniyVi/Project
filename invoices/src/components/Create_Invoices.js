
import {React,Component} from 'react'
import '../Style/Style_Create_Invoinices.css'

class Create_Invoices extends Component {
constructor(){
    super();
        this.state = {
          number:"",
          date_created:"",
          date_supplied:"",
          comment:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const name = target.name;
     
  
      this.setState({
        [name]:event.target.value
      });
    }
    
    createList() {
      if(this.state.number=="" &&this.state.date_supplied=="" &&this.state.comment=="" &&this.state.date_created == "" ){
        alert("no");
      }
      else{
        fetch("http://localhost:3000/invoices", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          number:this.state.number,
          date_created:this.state.date_created,
          date_supplied:this.state.date_supplied,
          comment:this.state.comment,
          })
        }
      )
     }
     this.props.func();
      this.props.view();
    }

    
  render(){    
      return(
        <div>
           <div className="create_invoices" >
            <p>Create Invoices</p>

           
            <div className="form">

            <div className="inline_block" >
              <div className="number">
              <label>Number:</label>
              <br/>
              <input type="text" minlength="3" placeholder="Number" name="number" id="number" value={this.state.number}  onChange={this.handleInputChange} />
           </div> 

          <div className="date_created">
            <label>Invoce_Date:</label>
              <br/>
           <input type="text" placeholder="Invoice_Date" name="date_created" id="date_created" value={this.state.date_created} onChange={this.handleInputChange}/>
          </div>

    </div>
 
 
 
        <div className="supplied_date">
          <label>Supply_Date:</label>
         <br/>
        <input type="text" placeholder="Supply_Date" name="date_supplied" id="supplied_date" value={this.state.date_supplied} onChange={this.handleInputChange}/>
       </div>

 

          <div className="comment">
           <label>Comment:</label>
             <br/>
            <input type="text" placeholder="Comment" name="comment" id="comment" value={this.state.comment} maxLength={163} onChange={this.handleInputChange}/>
          </div>
  
           <button onClick={()=>this.createList()} className="button_send">Send</button>
        </div>
          </div>  
        </div>
      )
  }
}

export default Create_Invoices;
