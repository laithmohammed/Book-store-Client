import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';

import Header from './components/header'
import Slidebar from './components/slidebar'
import SlideMenu from './components/slidemenu'
import Feed from './components/feed'
import Login from './components/login'

class App extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                <Slidebar />
                <SlideMenu />
                <Feed />
                <Login />
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />,document.getElementById('demo'));