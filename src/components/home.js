import React, {Component} from 'react';
import { Link} from "react-router-dom";
import './home.css'
import logo from '../img/girl2.png';
import bubble from '../img/bubble-text.png'

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
            <img id="img2" src={logo} alt="Logo" />
            <img id="bubble" src={bubble} alt="Logo" />
            <div id="text"> <h3>Hello, you are in <br/>"Search for Alice" game! <br /> Fill in the deateils <br />and start to play!</h3>
            </div>
            <hr />
            <div className="box">
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
            </div>
        </form>
        )
    }
}

export default Home;

