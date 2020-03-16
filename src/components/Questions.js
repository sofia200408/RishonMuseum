import React,{Component} from 'react';
import { Link} from "react-router-dom";
import './Questions.css'

class Questions extends Component{
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
            </div>
        );
    }

}

export default Questions;