import styled from "styled-components";
import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Photo from "./photo1.png"
import Id from "./user.png"
import Password from "./lock.png"

const Title = styled.h1`
  font-size: 50px;
`;

const Container = styled.div`
    height: 100vh;
    background-color: #aeb9bf;
    display: flex;
    flex-direction: row;
`;

const LeftContainer = styled.div`
    width: 60%;
    background-image: url(${Photo});
    background-size: cover;
    height: 100%;
`;
const RightContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
  width: 300px;
  background-color: #aeb9bf;
  border-top: none;
  border-left: none;
  border-right: none;
  heigth: 200px;
  text-align: center;
  padding: 10px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  /* margin-left: 0px; */
  /* maring-bottom: 30px; */
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  with: 100%;
  margin-bottom: 30px;
`;
const Login = styled.button`
    font-size: 10px;
    text-align: center;
    background-color: #4b646b;
    color: #aeb9bf;
    width: 320px;
    heigth: 100px;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
`;
function LoginPage(){
    const navigate = useNavigate();
    const[user,setUser] = useState({
        id: "",
        password: "",
    });
    const navigateToSignupPage = () => {
        navigate("/signup");
      };
    const updateUser = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value,
        });
    };
    console.log(user);
    const navigateToHomePage = () => {
        if (user.id == "c1ndy13" && user.password == "1234"){
            navigate("/home");
        }
    };
    return (
    <Container>
        <LeftContainer></LeftContainer>
        <RightContainer>
            <Title> Login </Title>
            <InputWrapper>
                <Image src={Id}></Image>
                <Input
                    name = "id"
                    value = {user.id}
                    placeholder = "username"
                    onChange = {updateUser}
                ></Input>
            </InputWrapper>
            <InputWrapper>
            <Image src={Password}></Image>
                <Input
                    name = "password"
                    value = {user.password}
                    placeholder = "password" 
                    onChange = {updateUser}
                ></Input>
            </InputWrapper>
            <Login onClick = {navigateToHomePage}>Login</Login>
            <Login onClick = {navigateToSignupPage}>Sign Up</Login>
        </RightContainer>
    </Container>
    );
}
export default LoginPage;