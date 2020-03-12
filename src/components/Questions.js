import React,{Component} from 'react';
import { Link} from "react-router-dom";

class Questions extends Component{
    render(){
        return(
            <div>
                Question
                <Link to="/Hint">
                    <button >Need a Hint?</button>
                </Link>
            </div>
        );
    }

}

export default Questions;