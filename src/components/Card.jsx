import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



function Card ( {card} ) {
    const navigate = useNavigate();

    return (

        <CdContainer onClick={() => { navigate(`/detail/${card.id}`);}}>
            <CdDialog>
            <CdTitle>{card.title}</CdTitle>
            <CdDesc>{card.desc}</CdDesc>
            </CdDialog>
            <CdInfo>
            <div>작성자: {card.name}</div>
            </CdInfo>
        </CdContainer>
    )
}

export default Card;

const CdContainer = styled.div`
    border: 1px solid #DCEDC8;
    width: 95%;
    min-width: 600px;
    height: 100px;
    margin: 1em auto;
    border-radius: 8px;
    background-color: white;
    :hover {
        background-color: #F1F8E9;
        cursor: pointer;
        box-shadow: 2px 2px 1px #AED581;
    }
    `

const CdDialog = styled.div`
    display: block;
    padding: 1em 1em 0.5em 1em;
`

const CdTitle = styled.div`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

const CdDesc = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: grey;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

const CdInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 2em 0 0 ;
    font-size: small;
    color: #33691E;
`
