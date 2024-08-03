import styled from "styled-components";
import React, { useState } from "react";
import Profile from "./user.png"
import IndexPage from "../IndexPage";

const Container = styled.div`
    height: 100vh;
    background-color: #7193BD;
    display: flex;
`;
const LeftContainer = styled.div`
    width: 50%;
    display:flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`;
const ImageInput = styled.input``;
const ImageLabel = styled.label``;

const Button = styled.a`
    display: inline-block;
    padding: 10px 40px;
    flex: 0 auto;
    border-radius: 6px;
    border: 0;
    background-color: #b5cbe6;
    color: #5A7596;
`;
const Input = styled.input`
  width: 300px;
  background-color: #ffffff;
  border: none;
  margin-bottom: 10px;
  padding: 10px;
`;
const ProfileContainer = styled.div`
    /* width: 60%; */
    /* height: 70px; */
    /* margin-left: 8px; */
    /* background-color: white; */
`;
const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    /* max-width: 100%; */
    /* object-fit: cover; */
`;
const SubContainer = styled.div`
  background-color: #e0e1dd;
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  margin-left: 23%;
  margin-top: 10%;
`;
function UserProfilePage(){
    const [user, setUser] = useState({
        username: "",
        nickname: "",
        mobile: "",
        email: "",
        profileImg: null,
        previewUrl: Profile,
      });
    const handleFileUpload = (e) => {
        const imgDetails = e.target.files[0];
        setUser({
            ...user,
            profileImg: e.target.files[0],

            previewUrl: URL.createObjectURL(e.target.files[0]),
        });
    };
    return(
    <Container>
        <IndexPage></IndexPage>
        <SubContainer>
        <LeftContainer>
            <ProfileContainer>
                <ProfileImg src={user.previewUrl} />
            </ProfileContainer>
            <ImageInput
                style = {{display: "none"}}
                accept = "image/*"
                type="file"
                id="profileImg"
                onChange={handleFileUpload}
            ></ImageInput>
                <ImageLabel htmlFor="profileImg">
                    <Button>Change Profile Image</Button>
                </ImageLabel>
        </LeftContainer>
        <RightContainer>
            <Input placeholder = "username"></Input>
            <Input placeholder = "nickname"></Input>
            <Input placeholder = "password"></Input>
            <Input placeholder = "email"></Input>
            <Input placeholder = "mobile number"></Input>
        </RightContainer>
        </SubContainer>
    </Container>)
}
export default UserProfilePage;
