import React, {Component} from 'react';
import { Link} from "react-router-dom";


class Home extends Component
{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        
        this.state={
            value:''
        };
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return(
        <form>
            <label>
                User Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <Link to="/content"> 
                <button type="button"> Click </button> 
            </Link>
        </form>
        )
    }
}

export default Home;

