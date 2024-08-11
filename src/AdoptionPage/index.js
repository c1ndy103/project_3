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
    align-items: center;
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
`

function AdoptionPage(){
    const location = useLocation()
    const images = location.state;
   
    function navigateToGoogleForm() {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSfwObDscExFJaTkfi823_P0AYTSC7WbR39gEpx5O9KA82_AZg/viewform", "_blank")
    }
   

    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title>Adoption</Title>
            <Description>Please consider not just the joy the dog brings, but also lifelong commitment to its care and love that you are about to undertake! </Description>
            <Button onClick={navigateToGoogleForm}>Adopt Your Pet</Button>
            </Container>

    )
}

export default AdoptionPage;


