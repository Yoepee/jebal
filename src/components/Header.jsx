
import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import bamboo from "../assets/images/bamboo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return <StContainer>
                <Stbutton onClick={() => { navigate("/");}}></Stbutton>
                <StText>이노베이션캠프 강원 대나무숲</StText>
           </StContainer>
}

export default Header;

const Stbutton = styled.button`
    margin: 20px;
    width: 45px;
    height: 45px;
    border: none;
    background-color: transparent;
    background-image: url(${bamboo});
    background-repeat: no-repeat;
	background-size: cover;
    cursor: pointer;

`

const StContainer = styled.div`
    align-items: center;
    border: 0px solid #38A3A5;
    display: flex;
    height: 45px;
    justify-content: space-between;
    background-color:#A4F3B3;
    padding: 10px;
`

const StText = styled.div`
    color: #1F4F6F;
    margin: 0 20px;
    font-size: 17px;
    font-weight: 300;

`
    