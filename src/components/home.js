import React, {Component} from 'react';

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
            <button onClick={this.handleClick}>Click</button>
        </form>
        )
    }
}

export default Home;

//handleclick function-username change place to header file and display content file