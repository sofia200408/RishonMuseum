import React, {Component} from 'react';
import { Link} from "react-router-dom";
import './home.css'

class Home extends Component{
    data;
    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);

        this.state={
            input:''
        };
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }
     
    handleFormSubmit(){
        sessionStorage.setItem("mySessionStorageDate",JSON.stringify(this.state.input));        
    }

    render(){
        return(
            <form>
                <label>
                    User Name:
                    <input type="text" onChange={this.handleChange} required/>
                </label>
            <div>
                <label>Number of Users: 
                    <input type="number" required/>
                </label>
                <label>City:
                    <input type="text" required/>
                </label>
             </div>
             <div>
             <label>Team Number:
                    <input type="number" required/>
                </label>
             </div>
             <Link to="/codescreen">
                <button onClick={this.handleFormSubmit}>Click</button>
            </Link>
            </form>
           
        )
    }
}

export default Home;

