import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header.js';
import Footer from './components/footer.js';
import Content from './components/content.js';
import Home from './components/home.js';

class App extends Component
{
  render(){
    return(
    <BrowserRouter>
      <div>
        <Header />
        <Home />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
