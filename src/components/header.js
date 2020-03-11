import React,{Component} from 'react';
import './header.css';
//import logo from '/logo.png';

class Header extends Component{
    
    render(){
        return(
          <div>
              Home {sessionStorage.getItem('mySessionStorageDate')}
          </div>  
        );
    }
}

export default Header;