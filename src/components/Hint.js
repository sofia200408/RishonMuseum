import React,{Component} from 'react';
import { Link} from "react-router-dom";

class Hint extends Component{
    render(){
        return(
            <div>
                Hint
                <Link to="/Questions">
                    <button >Back to Question</button>
                </Link>
            </div>
        );
    }
}

export default Hint;