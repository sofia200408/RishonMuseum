import React, {Component} from 'react';
import { BrowserRouter} from "react-router-dom";
import Header from './components/header.js';
import Footer from './components/footer.js';
import Routes from './Routes.js';


class App extends Component
{
  render(){
    return(
    <BrowserRouter>
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
