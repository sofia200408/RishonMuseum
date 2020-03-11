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
     
    handleFormSubmit(event){
        sessionStorage.setItem('mySessionStorageDate',JSON.stringify(this.state.input));
        event.preventDefault();
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
                <Link to="/content">
                    <button onClick={this.handleFormSubmit}>Click</button>
                </Link>
            </form>
        )
    }
}

export default Home;

