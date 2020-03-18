import React, {Component} from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom";

import Content from './components/content.js';
import Home from './components/home.js';
import CodeScreen from './components/CodeScreen.js';
import Questions from './components/Questions.js';

class Routers extends Component
{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/questions' component={Questions} />
                    <Route path='/codescreen' component={CodeScreen} />
                    <Route path='/content' component={Content} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers;
