import styled from "styled-components";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Heart from "./heart.png";
import RedHeart from "./redheart.png";
import IndexPage from "../IndexPage";

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
    const [images, setImages] = useState({
        Sapsali: [
            {
                image: "https://t3.ftcdn.net/jpg/04/98/58/32/360_F_498583203_EZ1QM4Ayja8ZSHcfv4adVHo41kEBUxll.jpg",
                name: "Munji",
                isClicked: false,
                age: 6,
                description: "Munji is lively and social dog, always excited to discover new places and meet new friends.",
            },
            {
                image: "https://www.cha.go.kr/unisearch/images/natural_monument/1631738.jpg",
                name: "Stella",
                isClicked: false,
                age: 4,
                description: "Stella is cheerful and friendly. She loves to make new buddies.",
            },
            {
                image: "https://t1.daumcdn.net/cfile/tistory/9978BB505A4220891B",
                name: "Bbaddok",
                isClicked: false,
                age: 9,
                description: "Bbaddok is calm and reserved. He is quiet and not very active.",
            },
            {
                image: "https://image.ajunews.com/content/image/2023/06/09/20230609152535409559.jpg",
                name: "Daisy",
                isClicked: false,
                age: 6,
                description: "Dasiy is playful and mischievous. She loves to go out.",
            },
            {
                image: "https://www.animal.go.kr/files/shelter/2021/04/202104191804998.jpg",
                name: "Bella",
                isClicked: false,
                age: 2,
                description: "Bella is affectionate and gives her family love and warmth",
            },
            {
                image: "https://www.epnnews.com/news/photo/201810/285_156_1057.jpg",
                name: "Coco",
                isClicked: false,
                age: 5,
                description: "Coco is easygoing and adaptable, \n fitting seamlessly into any environment.",
            },
            {
                image: "https://cdn.animaltoday.co.kr/news/photo/202204/700_825_4946.jpg",
                name: "Spencer",
                isClicked: false,
                age: 10,
                description: "Spencer is protective and vigilant, \n standing guard over his loved ones.",
            },
        ],
        JindoDog: [
            {
                image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_B9991C839D581223962D926955B12D75.jpg",
                name: "Max",
                isClicked: false,
                age: 2,
                description: "Max is courageous and fearless, ready to face any challenges.",
            },
            {
                image: "https://www.thesprucepets.com/thmb/Mlj9GQRfZcS2G9VWQkJEp3wzBRw=/2000x0/filters:no_upscale():strip_icc()/Korean-Jindo_jamongcreator_shutterstock-453909a9edb04666af108e0aa3035d01.jpg",
                name: "Cooper",
                isClicked: false,
                age: 3,
                description: "Cooper is agile and nimble, always up for a game of catch through the park.",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KdmBBF72XFDAI0c4kp7zuucF1AEyU9Suzg&usqp=CAU",
                name: "Eddie",
                isClicked: false,
                age: 6,
                description: "Eddie is inteligent and can do more than 10 tricks.",
            },
            {
                image: "https://biz.chosun.com/resizer/zbEi9aHiAzBmeT8NyA9_8wfpeb8=/1280x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/REI65CIE3BBCNP5DEOMLDEONIU.jpg",
                name: "Coby",
                isClicked: false,
                age: 6,
                description: "Coby love going outside, especially when it is raining. He adores playing in puddles."
            },
            {
                image: "https://img.sbs.co.kr/newimg/news/20170825/201086379_700.jpg",
                name: "Ghost",
                isClicked: false,
                age: 7,
                description: "Ghost is energetic and often digs up things in the backyard",
            },
        ],
        Donggyeongi: [
            {
                image: "https://i.namu.wiki/i/_g6Wu7D-o7tzYRw6YXUrqdwe2qo673452MdA6iocCZ8yQ0Yjj1_LyQILwvdDhkckouH9pRTPidMCwAhcvwjDvw.webp",
                name: "Coffee",
                isClicked: false,
                age: 5,
                description: "Coffe is curious and adventurous. He enjoyes exploring new places.",
            },
            {
                image: "https://image.dongascience.com/Photo/2014/04/13969388184457.jpg",
                name: "Teddy",
                isClicked: false,
                age: 3,
                description: "Teddy is social and makes new friends wherever he goes.",
            },
            {
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1mVmj8DQ7z3fvxGjZwlLVGD6AmemXMSBcK1S0h-K-Vsl4leHf",
                name: "Auggie",
                isClicked: false,
                age: 9,
                description: "Auggie is a cute dog. He always greets people with a wagging tail.",
            },
        ],
        PungsanDog: [
            {
                image: "https://i.namu.wiki/i/_yV90Hoe9B3FVU7cEl_-30kfIxgTNLdF3GFSeCxUXQeUQ_Z5NWuJWa0SdR2KfVfFwdx-h1nStytOvUXlhh5_pg.webp",
                name: "Luna",
                isClicked: false,
                age: 1,
                description: "Luna is an adorable dog. She collects all sorts of toys and share with other dogs.",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvOSbf2aDsoE26gi0oohmKPlHsKxGPzXBMg&usqp=CAU",
                name: "Leo",
                isClicked: false,
                age: 5,
                description: "Leo is charismatic, easily drawing people in.",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVwDHlsHSeahNhwI5x2F5HgzzRihZmNFIDA&usqp=CAU",
                name: "Duke",
                isClicked: false,
                age: 7,
                description: "Duke is determined, never giving up until he achieves his goals. ",
            },
            {
                image: "https://www.yyg.go.kr/build/images/1380/13808541/1380854173.jpg/300x1x70/300x1_1380854173.jpg",
                name: "Charlie",
                isClicked: false,
                age: 1,
                description: "Charlie is a playful dog, constantly seeking new thrills and excitement.",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZeXlDis3z2AOrZAsgJJ9WIdJI53kkW_VYNmRnTd4RC746oqi9bPY12MOBX1-fCO_wRs&usqp=CAUhttps://www.yyg.go.kr/build/images/1380/13808541/1380854173.jpg/300x1x70/300x1_1380854173.jpg",
                name: "Buddy",
                isClicked: false,
                age: 6,
                description: "Buddy is social and likes to meet his friends.",
            },

        ],

    }); 
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
        <IndexPage></IndexPage>
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

