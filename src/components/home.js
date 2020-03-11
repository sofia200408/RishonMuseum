import React, {Component} from 'react';
import { Link} from "react-router-dom";

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
        sessionStorage.setItem('mySessionStorageDate',JSON.stringify(this.state.input));
        //alert(this.state.input);
        
    }
    
    componentDidMount(){
        this.data=sessionStorage.getItem('mySessionStorageDate')
        //JSON.parse(sessionStorage.getItem('mySessionStorageDate'));
        //alert(this.data);


        if(sessionStorage.getItem('mySessionStorageDate'))
        {
            this.setState({
                input: this.data
            })
        }
        else{
            this.setState({
                input:''
            })
        }
    }

    render(){
        return(
            <form>
                <label>
                    User Name:
                    <input type="text" onChange={this.handleChange} placeholder="Type your name" required/>
                </label>
            <div>
                <label>Number of Users: 
                    <input type="text" placeholder="Type number of users" required/>
                </label>
                <label>City:
                    <input type="text" placeholder="Type city" required/>
                </label>
             </div>
             <div>
             <label>Team Number:
                    <input type="text" placeholder="Type team-number" required/>
                </label>
             </div>
             <Link to="/content">
                    <button onClick={this.handleFormSubmit}>Click</button>
            </Link>
            </form>
           
        )
    }
}

export default Home;

