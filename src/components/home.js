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
            TeamName:null,
            NumberOfUsers:null,
            City:null,

            formErrors:{
                TeamName:'',
                NumberOfUsers:'',
                City:''
            }
        };
    }
 
    handleChange(e){
        e.preventDefault();
        const {name ,value}=e.target;
        let formErrors=this.state.formErrors;

        switch(name){
            case 'TeamName':
                formErrors.TeamName= value.length<3 && value.length>0
                ? "minimum 3 letters required":"";
                break;
            case 'City':
                formErrors.City= value.length<3 && value.length>0
                ? "minimum 3 letters required":"";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]:value })
    }
     
    handleFormSubmit(){
        sessionStorage.setItem("mySessionStorageDate",JSON.stringify(this.state.TeamName));        
    }

    render(){
        const {formErrors}=this.state;
        return(
        <form>
            <img id="img2" src={logo} alt="Logo" />
            <img id="bubble" src={bubble} alt="Logo" />
            <div id="text"> <h3>Hello, you are in <br/>"Search for Alice" game! <br /> Fill in the deateils <br />and start to play!</h3>
            </div>
            <hr />
            <div className="box">
                    <label>Team Name:
                        <input type="text" 
                        name="TeamName" 
                        onChange={this.handleChange}/>
                        {formErrors.TeamName.length>0 &&(<span className="errorMessage">{formErrors.TeamName}</span>
                        )}
                    </label>
                    <br />
                    <label>Number of Users: 
                        <input type="number"/>
                    </label>
                    <label>City:
                        <input type="text" 
                        name="City" 
                        onChange={this.handleChange}/>
                        {formErrors.City.length>0 &&(<span className="errorMessage">{formErrors.City}</span>
                        )}
                    </label>
                    <br />
                <Link to="/codescreen">
                    <button onClick={this.handleFormSubmit}>Click</button>
                </Link>
            </div>
        </form>
        )
    }
}

export default Home;

