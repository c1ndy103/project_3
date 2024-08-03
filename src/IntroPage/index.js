import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const Container = styled.div`
    height: 100vh;
    background-color: #aeb9bf;
    display: flex;
    flex-direction: row;
`;
const LeftContainer = styled.div`
    width: 50%;
    background-size: cover;
    height: 100%;
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

function IntroPage(){
    return(
        <Container>
            <LeftContainer></LeftContainer>
            <RightContainer></RightContainer>
        </Container>
    );
};

export default IntroPage;