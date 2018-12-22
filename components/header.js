import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

let HeaderBar = Styled.div  `width:auto;display:flex;align-items:center;padding:10px 1%;justify-content:space-between;cursor:pointer;`;
let Logo      = Styled.div  `font-family: 'Wendy One', sans-serif;font-size:2em;overflow:hidden;color:#efefef;padding:0px 0.5em;`;
let B         = Styled.span `background:linear-gradient(#9751f0,#763bd5);padding-left:0.6em;border-radius:6px;color:white;`;
let OOK       = Styled.span `text-shadow:0px 0px 2px #9751f9;color:white;`;
let Store     = Styled.span `font-size:0.4em;color:#9751f0;`;
let SignForm  = Styled.div  `display:flex;justify-content:flex-end;align-items:center;`;
let Button    = Styled.div  `font-size:1.2em;color:#3a4752;padding:0px 0.5em;font-family: 'Noto Sans', sans-serif;cursor:pointer;flex-wrap:wrap;justify-content:center;display:flex;
                             &:hover { font-weight:bold; }`;

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <HeaderBar>
                <Logo>
                    <B>B</B>
                    <OOK>ook</OOK>
                    <Store>store</Store>
                </Logo>
                <SignForm>
                    <Button onClick={(event)=>{this.props.loginForm()}}>Login</Button>
                    <Button onClick={(event)=>{this.props.registerForm()}} style={{borderLeft:'1px solid #3a4752'}} >Register</Button>
                </SignForm>
            </HeaderBar>
        )
    }
}