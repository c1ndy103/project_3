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
const Button = styled.button`
width: 200px;
padding: 20px;
margin-top: 40px;
text-align: center;
background-color: #4b646b;
color: #aeb9bf;
margin-left: 45%;
`

function AdoptionPage(){
    const location = useLocation()
    const images = location.state;
   
    function navigateToGoogleForm() {
      window.open("https://forms.gle/APf9Kbi3KPrK6kb36", "_blank")
    }
   

    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title>Report</Title>
            <Description>If you see stray dogs, please report them to protect your community! </Description>
            <Button onClick={navigateToGoogleForm}>Report Stray Dog</Button>
            </Container>

    )
}

export default AdoptionPage;


