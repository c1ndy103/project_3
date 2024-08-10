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

function FavoritePage(){
    const location = useLocation()
    const images = location.state;
    const allImages = Object.values(images).flat()
    const filteredImages = allImages.filter(image => image.isClicked)
    
    function chunk(array, size) {
        return array.reduce((chunks, item, i) => {
          if (i % size === 0) {
            chunks.push([item]);
          } else {
            chunks[chunks.length - 1].push(item);
          }
          return chunks;
        }, []);
      }

    return(
        <Container>
            <IndexPage images={images}></IndexPage>
            <Title>Favorites</Title>
            <GridWrapper>
            {chunk(filteredImages, 4).map((row, rowIndex) => (
                  <Row>
                     {row.map((element, index) => (
                          <ImageWrapper>
                          <Image src={element.image} />

                          <Description>Name : {element.name}</Description>
                <Description>Age : {element.age}</Description>
                <Description>Description : {element.description}</Description>
                          </ImageWrapper>
                     ))}
                  </Row>
            ))}
            </GridWrapper>
            
            </Container>

    )
}

export default FavoritePage;


