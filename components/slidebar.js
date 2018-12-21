import React from 'react';
import Styled from 'styled-components';
import Imgcolor from 'node-vibrant'
import 'babel-polyfill';

let Slide       = Styled.div `display:flex;height:20em;overflow:scroll;margin-bottom:2em;`;
let BookCard    = Styled.div `position:relative;margin-left:1px;`;
let Img         = Styled.img `position:absolute;width:10em;height:15em;margin:2em;box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);`;
let Data        = Styled.div `width:15.5em;height:11em;padding:2em 0.5em;padding-left:13em;color:white;justify-content:space-between;display:flex;flex-direction:column;`;
let Title       = Styled.span `font-size:1em;text-transform:capitalize;font-weight:bold;font-family: 'Noto Sans', sans-serif;display:block;`;
let Author      = Styled.span `font-size:0.7em;display:block;`;
let Vote        = Styled.div `display:flex;align-items:center;justify-content:flex-start;font-size:0.6em;width:100%;margin:0.5em 0px;`;
let StarIcon    = Styled.img `width:2em;`;
let Voters      = Styled.span `padding-left:20px;font-size:1.3em;`;
let Description = Styled.span `font-size:0.8em;margin-bottom:1em;display:block;`;
let SeeBook     = Styled.div `display:flex;align-items:center;justify-content:center;`;
let Button      = Styled.input `outline:none;background-color:white;border:unset;border-radius:2em;font-size:1em;padding:0.5em 3em;font-weight:bold;cursor:pointer;`;


class Slidebar extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [require(`../assets/book/book1.png`),require(`../assets/book/book2.png`),require(`../assets/book/book3.png`),require(`../assets/book/book4.png`),require(`../assets/book/book5.png`)],
            color: []
        }
    }
    componentDidMount(){
        this.setColor();
    }
    setColor(){
        let data = this.state.data; // array of Images
        let color = []
        let len = data.length;
        data.map((IMG,i)=>{
            let x = Imgcolor.from(IMG).getPalette().then(rslt=>{
                console.log(rslt)
                color.push(rslt.DarkVibrant._rgb)
                // color.push(rslt.Vibrant._rgb)
                if(i == len-1){ this.setState({color : color}) }
            })
        })
        
    }
    render(){
        return(
            <Slide>
                {this.state.data.map((book,i)=>{
                    let color = this.state.color[i];
                    if( color == undefined ){ color = [115,135,151]; }
                    console.log(color);
                    return (
                        <BookCard key={i}>
                            <Img src={book} alt="book"/>
                            <Data style={{backgroundColor:`rgb(${color[0]},${color[1]},${color[2]})`}}>
                                    <div>
                                        <Title>BIG MAGIC : Creative Liv ...</Title>
                                        <Author>by Elizabeth Giibret</Author>
                                        <Vote>
                                            <StarIcon src={require('../assets/icon/staryellow.png')} alt="star yellow" />
                                            <StarIcon src={require('../assets/icon/staryellow.png')} alt="star yellow" />
                                            <StarIcon src={require('../assets/icon/staryellow.png')} alt="star yellow" />
                                            <StarIcon src={require('../assets/icon/starsilver.png')} alt="star silver" />
                                            <StarIcon src={require('../assets/icon/starsilver.png')} alt="star silver" />
                                            <Voters>654 voters</Voters>
                                        </Vote>
                                        <Description>There are a number of features that make RandomText a little different from other Lorem Ipsum dummy text generators ...</Description>
                                    </div>
                                    <SeeBook>
                                        <Button type="submit" value="See The Book" style={{color:`rgb(${color[0]},${color[1]},${color[2]})`}} />
                                    </SeeBook>
                            </Data>
                        </BookCard>
                    )
                })}
            </Slide>
        )
    }
}

export default Slidebar;