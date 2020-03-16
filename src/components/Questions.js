import React,{Component} from 'react';
import { Link} from "react-router-dom";
import './Questions.css'

class Questions extends Component{
    constructor(props){
        super(props);

        this.state={
            second:0
        }
    }

    getMinute(){
        return Math.floor(this.state.second/60);
    }

    getSecond(){
        return ('0'+this.state.second%60).slice(-2);
    }

    handleStartClick(){
        var _this=this;

        _this.incrementer=setInterval(()=>{
            this.setState({
                second:(_this.state.second + 1)
            })
        },1000)
    }
    //chooseAnswer(){
    //}

    render(){
        return(
            <div>
                Question-here will be the Question
                <ol type='a'>
                    <li><button>answer1</button></li>
                    <li><button>answer2</button></li>
                    <li><button>answer3</button></li>
                </ol>
                <Link to="/Hint">
                    <button >Click for a Hint</button>
                </Link>
                <div>
                    <h1>{this.getMinute()}:{this.getSecond()}</h1>
                    <button type="button" onClick={this.handleStartClick}>Start</button>
                </div>
            </div>
        );
    }

}

export default Questions;