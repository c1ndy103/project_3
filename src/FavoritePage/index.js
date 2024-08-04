import styled from "styled-components";
import React, { useState } from "react";
import IndexPage from "../IndexPage";

const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #919ea8;
    flex-direction: column;
    display: flex;
`


function FavoritePage(){
    return(
        <Container>
            <IndexPage></IndexPage>
            </Container>
    )
}

export default FavoritePage;


