import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';

import Header from './components/header'
import Slidebar from './components/slidebar'

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
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />,document.getElementById('demo'));