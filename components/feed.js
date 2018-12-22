import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

let Feed            = Styled.div `display:flex;justify-content:center;margin:2em 0px;flex-wrap:wrap;`
let Card            = Styled.div `width:100%;max-width:32em;background-color:white;border-radius:8px;position:relative;border:1px solid #eaedef;margin-bottom:2.4em;padding-right:1em;`
let BookPic         = Styled.img `height:12em;width:8em;margin-left: 1em;margin-top:-2em;position:absolute;box-shadow:0px 0px 20px rgba(0, 0, 0, 0.2);`
let Data            = Styled.div `margin-left:10em;margin-top:1.6em;`
let Name            = Styled.span `text-transform:capitalize;font-size:1em;font-family: 'Noto Sans', sans-serif;`
let Auther          = Styled.span `font-size:0.8em;font-family: 'Noto Sans', sans-serif;display:block;`
let VoteContainer   = Styled.div `display:flex;align-items:center;`
let StarIcon        = Styled.img `width:1.4em;`
let VoterNum        = Styled.span `font-size:0.8em;padding-left:2em`
let Description     = Styled.span `display:block;padding:0.8em 0px;`
let LikerCon        = Styled.div `margin-left:1em;border-top:1px solid #efefef;display:flex;position:relative;align-items:center;padding:8px 0px;`
let LikerPic        = Styled.img `width:2em;border-radius:50%;border:1px solid silver;`
let ShiftBack       = Styled.img `padding-left:-0.2em;`
let LikeSpan        = Styled.span `font-size:0.8em;padding-left:1em`

class FeedList extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [require(`../assets/book/book1.png`),require(`../assets/book/book3.png`),require(`../assets/book/book5.png`),require(`../assets/book/book2.png`),require(`../assets/book/book4.png`),require(`../assets/book/book5.png`),require(`../assets/book/book4.png`),require(`../assets/book/book3.png`),require(`../assets/book/book2.png`),require(`../assets/book/book1.png`),require(`../assets/book/book5.png`)]
        }
    }
    render(){
        return(
            <Feed>
                {this.state.data.map((Img,i)=>{
                    return(
                        <Card key={i}>
                            <BookPic src={Img} alt="book" />
                            <Data>
                                <Name>BIG MAGIC : Creative Liv ...</Name>
                                <Auther>by Elizabeth Giibret</Auther>
                                <VoteContainer>
                                    <StarIcon src={require('../assets/icon/staryellow.png')} alt="star yellow"/>
                                    <StarIcon src={require('../assets/icon/staryellow.png')} alt="star yellow"/>
                                    <StarIcon src={require('../assets/icon/starsilver.png')} alt="star silver"/>
                                    <StarIcon src={require('../assets/icon/starsilver.png')} alt="star silver"/>
                                    <StarIcon src={require('../assets/icon/starsilver.png')} alt="star silver"/>
                                    <VoterNum>654 voters</VoterNum>
                                </VoteContainer>
                                <Description>There are a number of features that make RandomText a little different from other Lorem Ipsum dummy text generators ...</Description>
                            </Data>
                            <LikerCon>
                                <LikerPic src={require('../assets/icon/profile.png')} alt="profile pic"/>
                                <LikerPic src={require('../assets/icon/profile.png')} alt="profile pic"/>
                                <LikerPic src={require('../assets/icon/profile.png')} alt="profile pic"/>
                                <LikeSpan><b>Samintha Willion</b> and <b>2 others</b> like this</LikeSpan>
                            </LikerCon>
                        </Card>
                    )
                })}
            </Feed>
        )
    }
}

export default FeedList;