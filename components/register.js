import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

let Form         = Styled.div `position:fixed;width:auto;max-width:30em;height:100%;background-color:white;top:0px;right:0px;bottom:0px;z-index:10;display:inline;box-shadow:0px 0px 30px rgba(0, 0, 0, 0.5);overflow:scroll;`;
let Close        = Styled.span `color:#738797;font-weight:bolder;margin:0.8em;font-size:1.4em;font-family: 'Noto Sans', sans-serif;cursor:pointer; `;
let Container    = Styled.div `padding:0px 13.5%;margin-top:2.6em;height:150%;`;
let LogoCon      = Styled.div `width:100%;text-align:center;padding-bottom:3em `;
let Logo         = Styled.img `width:70%; `;
let Border       = Styled.div `border:1.5px solid #a2a2a2;height:25px;border-radius:10px;display:flex;align-items:center;padding:0.5em;padding-right:1px;margin-bottom:1em `;
let Img          = Styled.img `width:1.4em;position: absolute; `;
let InputText    = Styled.input `width:100%;border:0px;font-size:25px;padding-left:25px;font-family: 'Noto Sans', sans-serif;border-radius:20px;margin-right:4px;outline:none; `;

let InputButtonCon= Styled.div `width:100%;display:flex;align-items:center;justify-content:center;padding-top:2em `;
let InputButton  = Styled.input `width:53%;background:linear-gradient(to right, #773cd6 , #9751f0);text-align:center;color:white;padding:0.3em;font-size: 25px;border-radius:50px;
                            font-family: 'Noto Sans', sans-serif;cursor:pointer;border:0px;outline:none
                            &:hover { background:linear-gradient(to right, #9751f0, #773cd6); }
                            &:active { background:linear-gradient(to right, #773cd6, #773cd6); }`;

let LoginCon     = Styled.div `width:100%;text-align:center;padding-bottom:4em;font-family: 'Noto Sans', sans-serif;display:flex;padding-top:3em `;
let LoginTxt     = Styled.div `font-size:20px;color:#606560 `;
let LoginWrd     = Styled.span `font-weight:bolder;cursor:pointer;padding-left:8px;color:#3496d7 `;

        

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
        }
    }
    render(){
        return(
            <Form>
                <Close onClick={(event)=>{this.props.hideRegisterForm()}} >x</Close>
                <Container>
                    <LogoCon>
                        <Logo src={require('../assets/icon/logo.png')} alt="store logo" />
                    </LogoCon>
                    <Border>
                        <Img src={require('../assets/icon/person.png')} />
                        <InputText type="text" placeholder="Username"/>
                    </Border>
                    <Border>
                        <Img src={require('../assets/icon/email.png')} />
                        <InputText type="email" placeholder="Email"/>
                    </Border>
                    <Border>
                        <Img src={require('../assets/icon/key.png')} />
                        <InputText type="password" placeholder="Password"/>
                    </Border>
                    <Border>
                        <Img src={require('../assets/icon/lock.png')} />
                        <InputText type="password" placeholder="Confirm"/>
                    </Border>
                    <InputButtonCon>
                        <InputButton type='submit' defaultValue='REGISTER' />
                    </InputButtonCon>
                    <LoginCon>
                        <LoginTxt>You have an account ? <LoginWrd onClick={(event)=>{this.props.loginForm()}}>Login</LoginWrd></LoginTxt>
                    </LoginCon>
                </Container>
            </Form>
        )
    }
}

export default Register;