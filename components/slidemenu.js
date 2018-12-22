import React from 'react';
import Styled from 'styled-components';
import Imgcolor from 'node-vibrant'
import 'babel-polyfill';

let Slide  = Styled.div `position:fixed;top:0px;left:-4.1em;height:100%;width:4em;background-color:white;border-right:1px solid #738797;z-index:100;display:flex;flex-direction:column;align-items:center;`
let MenuButton = Styled.div `width:3em;height:3em;background-color:white;border-top-right-radius:1em;border-bottom-right-radius:1em;position:fixed;bottom:2em;margin-left:3.4em;border:1px solid #738797;border-left:unset;`
let SvgIcon    = Styled.img `width:3em;margin:0.8em 0px;cursor:pointer;`
let MenuSvg    = Styled.img `width:2.6em;position:absolute;margin-top:0.2em;margin-left:0.2em;`

class SlideMenu extends React.Component{
    constructor(){
        super();
        this.state ={
        }
    }
    sliding(e){
        let title = e.target.title;
        let SlideMenu = document.getElementById('SlideMenu');
        let MenuButton = document.getElementById('MenuButton');
        if(title == 0){ SlideMenu.style.left = "0em";SlideMenu.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.5)';MenuButton.title = "1"; }
        if(title == 1){ SlideMenu.style.left = "-4.1em";SlideMenu.style.boxShadow = 'unset';MenuButton.title = "0"; }
    }
    render(){
        return(
            <Slide id='SlideMenu'>
                <MenuButton><MenuSvg src={require('../assets/icon/menu.svg')} alt="menu" title="0" onClick={this.sliding.bind(this)} id="MenuButton"/></MenuButton>
                <SvgIcon src={require('../assets/icon/userhold.svg')} alt="user" />
                <SvgIcon src={require('../assets/icon/homehold.svg')} alt="home" />
                <SvgIcon src={require('../assets/icon/searchhold.svg')} alt="search" />
                <SvgIcon src={require('../assets/icon/taghold.svg')} alt="tag" />
                <SvgIcon src={require('../assets/icon/addbook.svg')} alt="add book"/>
                <SvgIcon src={require('../assets/icon/logouthold.svg')} alt="logout" />
            </Slide>
        )
    }
}

export default SlideMenu;