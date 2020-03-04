import React, {Component} from 'react';
import { Link} from "react-router-dom";
import Content from './content';

class Home extends Component
{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleChange.bind(this);
        
        this.state={
            input:''
        };
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }

    render(){
        return(
            <form>
                <label>
                    User Name:
                    <input type="text" onChange={this.handleChange}/>
                </label>
                <Link to="/content">
                    <button>Click</button>                
                </Link>
            </form>
        )
    }
}

export default Home;

