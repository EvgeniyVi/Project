
import '../Style/Style_Table_Invoices.css'
import {React,Component} from 'react'
import { getByTestId } from '@testing-library/dom';

class Table_Invoices extends Component{
constructor(){
    super();
    this.state = {
        id:""
    }
    this.deleted = this.deleted.bind(this);
}


deleted(){
     fetch("http://localhost:3000/invoices/" + this.state.id, {
     method: "DELETE",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
    }
   )   
   this.props.func();
}

    render(){
        return(
            <div>
                 <div className="invoices">
                    <p>Invoices</p>
                    <table>
                     <tbody className="tbody">
                         <tr >
                             <th  className="th" >Create</th>
                             <th className="th">No</th>
                             <th className="th">Supply</th>
                             <th className="th">Comment</th>
                             <th className="th">Actions</th>
                       </tr>
                    </tbody>

                        {this.props.info.map((item) => {
                           
                                return(                 
                                    <tbody key={item.id} > 
                                        <tr onMouseOver={()=>this.setState({id:item.id})}>
                                          <td className="td" >{item.number}</td>
                                          <td className="td">{item.date_created}</td>
                                          <td className="td">{item.date_supplied}</td>
                                          <td className="td">{item.comment}</td>
                                          <td><button  onClick={this.deleted} >Delete</button></td>
                                       </tr>
                                </tbody>
                            )
                         })
                        }
                    </table>
                </div>
            </div>
        )
    }
}
    


export default Table_Invoices;
