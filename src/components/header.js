import React,{Component} from 'react';
import './header.css';
//import logo from '/logo.png';

class Header extends Component{
  
    render(){
        return(
          <div>
              <span>Welcome {JSON.parse(sessionStorage.getItem("mySessionStorageDate"))}</span>
          </div>  
        );
    }
}

export default Header;