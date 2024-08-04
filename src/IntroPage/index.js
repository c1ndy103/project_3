import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import IndexPage from "../IndexPage";
import RedHeart from "./redheart.png";

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

font-size: 40px;

`;

const ImageContainer = styled.div`
margin-left: 20px;
display:flex;
flex-direction: column;

align-items: center;
`;

const Image = styled.img`
width: 200px;
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
                    sdddffdfdfdfdf<br></br>df
                sdddffdfdfdfdf<br></br>
                dfsdddffdfdfdfdf<br></br>dfsdddffdfdfdfdf
                <br></br>dfsdddffdfdfdfdf<br></br>df
                </Purpose>
                <ImageContainer>
                    <Image src={RedHeart}/>
                    <Link href="https://www.google.co.kr/?hl=ko">click</Link>
                </ImageContainer>
           
           </TopContainer>
           
        </Container>
    );

};

export default IntroPage;