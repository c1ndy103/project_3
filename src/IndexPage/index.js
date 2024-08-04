import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

const PageName = styled.div`
  margin-bottom: 10px;
`;
const Container = styled.div`
  /* height: 100%; */
  /* min-height: 100vh; */
`;
function IndexPage(){
    var styles = {
        bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "36px",
        top: "36px",
        },
        bmBurgerBars: {
        background: "#f4e9cd",
        },
        bmBurgerBarsHover: {
        background: "#f4e9cd",
        },
        bmCrossButton: {
        height: "24px",
        width: "24px",
        },
        bmCross: {
        background: "#0e3450",
        },
        bmMenuWrap: {
        position: "fixed",
        height: "100%",
        },
        bmMenu: {
        background: "#f4e9cd",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
        paddingTop: "100px",
        },
        bmMorphShape: {
        fill: "#373a47",
        },
        bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
        display: "flex",
        flexDirection: "column",
        },
        bmItem: {
        display: "inline-block",
        marginBottom: "10px",
        },
        }; 
        const navigate = useNavigate();
        const navigateToPage = (page) => {
          if (page == "user-profile") {
            navigate("/user-profile");
          }
          if (page == "home"){
            navigate("/home");
          }
          if (page == "purpose"){
            navigate("/purpose");
          }

          if (page == "favorite"){
            navigate("/favorite");
          }
        }; 
        return(
            <Container>
              <Menu noOverlay styles={styles}>
                <PageName onClick={() => navigateToPage("purpose")}>
                  Purpose
                </PageName>
                <PageName onClick={() => navigateToPage("user-profile")}>
                  User Profile
                </PageName>
                <PageName onClick={() => navigateToPage("home")}>
                  Home Page
                </PageName>
                <PageName onClick={() => navigateToPage("favorite")}>Favorites</PageName>
              </Menu>
            </Container>
        )
    }
export default IndexPage;