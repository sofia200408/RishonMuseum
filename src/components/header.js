import React,{Component} from 'react';
import './header.css';
import logo from '../logo/type2.png';

console.log(logo);

class Header extends Component{
  
    render(){
        return(
          <div>
              <span>Welcome {JSON.parse(sessionStorage.getItem("mySessionStorageDate"))}</span>
              <img src={logo} alt="Logo"/>
          </div>  
        );
    }
}

export default Header;