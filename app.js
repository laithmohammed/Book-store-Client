import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';

import Header from './components/header'
import Slidebar from './components/slidebar'
import SlideMenu from './components/slidemenu'
import Feed from './components/feed'
import Login from './components/login'
import Register from './components/register'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form : ''
        }
    }
    showLoginForm(){ this.setState({form : <Login hideLoginForm={this.hideForm.bind(this)} registerForm={this.showRegisterForm.bind(this)}/>}) }
    showRegisterForm(){ this.setState({form : <Register hideRegisterForm={this.hideForm.bind(this)} loginForm={this.showLoginForm.bind(this)}/>}) }
    hideForm(){ this.setState({form : ''}) }
    render(){
        return(
            <React.Fragment>
                <Header loginForm={this.showLoginForm.bind(this)} registerForm={this.showRegisterForm.bind(this)}/>
                <Slidebar />
                <SlideMenu />
                <Feed />
                <div>{this.state.form}</div>
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />,document.getElementById('demo'));