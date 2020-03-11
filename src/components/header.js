import React,{Component} from 'react';
import './header.css';
//import logo from '/logo.png';

class Header extends Component{
    
    render(){
        return(
          <div>
              <span>Home {sessionStorage.getItem('mySessionStorageDate')}</span>
          </div>  
        );
    }
}

export default Header;