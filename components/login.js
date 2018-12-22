import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

let LoginForm   = Styled.div `position:fixed;width:auto;max-width:30em;height:100%;background-color:white;top:0px;right:0px;bottom:0px;z-index:10;display:none;box-shadow:0px 0px 30px rgba(0, 0, 0, 0.5)`;
let CloseButton = Styled.span `color:#738797;font-weight:bolder;margin:0.8em;font-size:1.4em;font-family: 'Noto Sans', sans-serif;cursor:pointer;`;
let Container   = Styled.div `padding:0px 13.5%;margin-top:4em;`
let LogoCon     = Styled.div `width:100%;text-align:center;padding-bottom:3em`
let Logo        = Styled.img `width:70%;`
let Border      = Styled.div `border:1.5px solid #a2a2a2;height:25px;border-radius:10px;display:flex;align-items:center;padding:0.5em;padding-right:1px;margin-bottom:2em`
let Img         = Styled.img `width:1.4em;position: absolute;`;
let Input       = Styled.input `width:100%;border:0px;font-size:25px;padding-left:25px;font-family: 'Noto Sans', sans-serif;border-radius:20px;margin-right:4px;outline:none;`

let LoginBCon   = Styled.div `width:100%;display:flex;align-items:center;justify-content:center`
let ButtonLogin = Styled.input `width:53%;background:linear-gradient(to right, #773cd6 , #9751f0);text-align:center;color:white;padding:0.3em;font-size: 25px;border-radius:50px;font-family: 'Noto Sans', sans-serif;cursor:pointer;border:0px;outline:none
                            &:hover { background:linear-gradient(to right, #9751f0, #773cd6); }
                            &:active { background:linear-gradient(to right, #773cd6, #773cd6); }
                            `;

let RegistCon   = Styled.div `width:100%;text-align:center;padding-bottom:4em;font-family: 'Noto Sans', sans-serif;display:flex;padding-top:5em`
let RegistTxt   = Styled.div `font-size:20px;color:#606560`
let RegistWrd   = Styled.span `font-weight:bolder;cursor:pointer;padding-left:8px;color:#3496d7`

class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            
        }
    }
    closingLoginForm(e){ document.getElementById('LoginForm').style.display="none" }
    render(){
        return(
            <LoginForm id="LoginForm">
                <CloseButton onClick={e=>this.closingLoginForm(e)} >x</CloseButton>
                <Container>
                    <LogoCon>
                        <Logo src={require('../assets/icon/logo.png')} alt="store logo"/>
                    </LogoCon>
                    <Border>
                        <Img src={require('../assets/icon/person.png')} />
                        <Input type="text" placeholder="Username"/>
                    </Border>
                    <Border>
                        <Img src={require('../assets/icon/lock.png')}/>
                        <Input type="password" placeholder="Password"/>
                    </Border>
                    <LoginBCon>
                        <ButtonLogin defaultValue='LOGIN' />
                    </LoginBCon>
                    <RegistCon>
                        <RegistTxt>You don't have account? <RegistWrd>Register</RegistWrd></RegistTxt>
                    </RegistCon>
                </Container>
            </LoginForm>
        )
    }
}

export default Login;