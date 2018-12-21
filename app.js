import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';

class App extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <h1>Hello World !!!</h1>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('demo'));