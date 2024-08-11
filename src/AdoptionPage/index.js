import styled from "styled-components";
import React, { useState } from "react";
import IndexPage from "../IndexPage";
import {useLocation} from "react-router-dom"

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #919ea8;
    flex-direction: column;
    display: flex;
`
const Title = styled.h1`
    text-align: center;
    font-family: cursive;
    font-size: 50px;
    padding: 20px;
`
const Description = styled.div`
  font-size: 20px;
  text-align:center;
  
`;


function AdoptionPage(){
    const location = useLocation()
    const images = location.state;
   
   

    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title>Adoption</Title>
            <Description>Please consider not just the joy the dog brings, but also lifelong commitment to its care and love that you are about to undertake! </Description>
            </Container>

    )
}

export default AdoptionPage;


