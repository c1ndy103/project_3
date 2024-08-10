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
const GridWrapper = styled.div`
  diplay: flex;
  margin-top: 40px;
  flex-direction: column;
  width: 60%;
  align-self: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  height: 400px;
  width: 250px;
  background-color: #f4e9cd;
  margin-right: 20px;
  /* width: 100%; */
  display: inline-block;
  position: relative;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
  position: block;
  /* position: "block"; */
`;

const Description = styled.div`
  font-size: 13px;
  padding-left: 10px;
`;

function AdoptionPage(){
    const location = useLocation()
    const images = location.state;
   
   

    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title>Favorites</Title>
          
            
            </Container>

    )
}

export default AdoptionPage;


