import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import IndexPage from "../IndexPage";
import WildDogs from "./wilddogs.jpeg";
import Paw from "./paws.png"
import Explore from "./explore.png"
import Report from "./report.png"
import {useLocation} from "react-router-dom"

const Container = styled.div`
    height: 100vh;
    background-color: #aeb9bf;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
font-size: 100px;
margin-left: 30%;
margin-top: 40px;

`;

const TopContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin-top: 50px;
padding: 20px;
background-color: #95B4C4;
`;

const Purpose = styled.div`

font-size: 28px;
width: 50%;
font-family: fatasy;
`;

const ImageContainer = styled.div`
margin-left: 20px;
display:flex;
flex-direction: column;

align-items: center;
`;

const Image = styled.img`
width: 450px;
`;

const Link = styled.a`

`;

const BottomContainer = styled.div`

display:flex;
flex-direction: row;
justify-content: space-around;
background-color: #6BA5C3;
padding: 40px;
height: 100%;
`;

const IconContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const Icon = styled.img`
width: 100px;
`;
const Description = styled.div`
font-size: 20px;
text-align: center;
margin-top:20px;
`;
function IntroPage(){
    const location = useLocation()
    const images = location.state;
    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title><b>WPR Jeju</b></Title>
            <TopContainer>
                <Purpose>
                The purpose is to solve the issue of wild dogs in Jeju by facilitating the reporting and adoption of these animals.<br></br>
                By this platform, potential risks to public safety and conflicts between humans and wild dogs can be mitigated.<br></br>
                It also connects potential adopters with rescued animals to give them a chance of better life. <br></br>
                As such, this WebApp strives to foster a sustainable community for both local and abandoned dogs. <br></br>
                </Purpose>
                <ImageContainer>
                    <Image src={WildDogs}/>
                    <Link href="https://www.heraldinsight.co.kr/news/articleView.html?idxno=1666">News Article 1</Link>
                    <Link href="https://www.heraldinsight.co.kr/news/articleView.html?idxno=3359">News Article 2</Link>
                </ImageContainer>
           
           </TopContainer>
           <BottomContainer>
            <IconContainer>
            <Icon src={Paw}/>
            <Description>Special chance to adopt dogs for free!</Description>
            </IconContainer>

            <IconContainer>
            <Icon src={Report}/>
            <Description>Report wild dogs for both local and the dogs!</Description>
            </IconContainer>
            
            <IconContainer>
            <Icon src={Explore}/>
            <Description>Explore and add favorites of the dogs you like!</Description>
            </IconContainer>
           </BottomContainer>
           
        </Container>
    );

};

export default IntroPage;