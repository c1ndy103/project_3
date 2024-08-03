import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import IndexPage from "../IndexPage";
import WildDogs from "./wilddogs.jpeg";

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
margin-left: 10%;
margin-top: 50px;
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
function IntroPage(){
    return(
        <Container>
            <IndexPage></IndexPage>
            <Title>WPR Jeju</Title>
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
           
        </Container>
    );
};

export default IntroPage;