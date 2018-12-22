import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';

import Header from './components/header'
import Slidebar from './components/slidebar'
import SlideMenu from './components/slidemenu'

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
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />,document.getElementById('demo'));