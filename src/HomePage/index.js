import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Heart from "./heart.png";
import RedHeart from "./redheart.png";
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
const Button = styled.button`
    background-color: #f4e9cd; 
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 25px;
    margin-left: 20px;
`;
const Buttonwrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
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
const HeartImage = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;

  filter: invert(52%) sepia(19%) saturate(199%) hue-rotate(147deg)
    brightness(91%) contrast(92%);

  /* top: 100; */
  /* margin-top: 100px; */
`;
const RedHeartImage = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;
`;
function HomePage(){
    const [type, setType] = useState("Sapsali");
    const location = useLocation()
    const initialImages = location.state;

    const [images, setImages] = useState(initialImages)
    
    function clickHeart(type, rowIndex, index) {
        const finalIndex = rowIndex * 4 + index;
        let clickedImage = images[type][finalIndex];
        let temp = images[type];
        temp[finalIndex] = {
          ...temp[finalIndex],
          isClicked: !clickedImage["isClicked"],
        };

        setImages({
          ...images,
          [type]: temp,
        });
    
      }
      
    function selectType(type) {
        setType(type);
      }  
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
        <Title> Explore Our Dogs </Title>
        <Buttonwrapper>
            <Button onClick={() => selectType("Sapsali")}>Sapsali</Button>
            <Button onClick={() => selectType("JindoDog")}>JindoDog</Button>
            <Button onClick={() => selectType("Donggyeongi")}>Donggyeongi</Button>
            <Button onClick={() => selectType("PungsanDog")}>PungsanDog</Button>
        </Buttonwrapper>
        <GridWrapper>
        {chunk(images[type], 4).map((row,rowIndex) => (
          <Row>
            {row.map((element, index) => (
              <ImageWrapper>
                <Image src={element.image} />
                {element.isClicked == false ? (
                  <HeartImage
                    src={Heart}
                    onClick={() => clickHeart(type,rowIndex,index)}
                  ></HeartImage>
                ) : (
                  <RedHeartImage
                    src={RedHeart}
                    onClick={() => clickHeart(type,rowIndex,index)}
                  ></RedHeartImage>
                )}
                <Description>Name : {element.name}</Description>
                <Description>Age : {element.age}</Description>
                <Description>Description : {element.description}</Description>
              </ImageWrapper>
            ))}
          </Row>
        ))}
        </GridWrapper>
    </Container>)
}
export default HomePage;

