import React, {Component} from 'react';
import Select from 'react-select';
import './home.css';
import logo from '../img/girl2.png';
import bubble from '../img/bubble-text.png';

const formValid=({formErrors,...rest})=>{
    let valid=true;

    Object.values(formErrors).forEach(val=>{
        val.length >0 && (valid=false);
    })

    Object.values(rest).forEach(val=>{
        val===null && (valid=false);
    });
    return valid;
};

const cities=[
    {label:"Holon", value:1},
    {label:"Netanya",value:2}
]

class Home extends Component{
    data;
    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);

        this.state={
            TeamName:null,
            City:null,

            formErrors:{
                TeamName:'',
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
            default:
                break;
        }

        this.setState({ formErrors, [name]:value })
        this.forceUpdate();

    }
     
    handleFormSubmit(){
        if(formValid(this.state))
        {
            sessionStorage.setItem("mySessionStorageDate",JSON.stringify(this.state.TeamName));   
            this.props.history.push('/codescreen');
        }
        else{
            alert("Please fill in the details");
        }     
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
                <form>
                    <label>Team Name:
                        <input type="text" 
                        name="TeamName" 
                        onChange={this.handleChange}/>
                        {formErrors.TeamName.length>0 &&(<span className="errorMessage">{formErrors.TeamName}</span>
                        )}
                    </label>
                    <br />
                    <label>Number of Users: 
                        <input type="number" min="0"/>
                    </label>
                    <br />
                    <label>City:
                        <Select options={cities}/>
                    </label>
                    <br />
                    <button onClick={this.handleFormSubmit}>Click</button>
                </form>
            </div>
        </form>
        )
    }
}

export default Home;

