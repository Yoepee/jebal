import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card"
import Button from "../elem/Button"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux/';
import { __getPosts } from "../redux/modules/post";


// import Wrapper from "../elem/Wrapper";

function CardList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error, cards} = useSelector((state) => state.post);

    // console.log(cards)

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])

    if (error) {
        return <div>{error.message}</div>;
    }

    if (cards.length === 0)
        return (
        <>
        <CdWrapper> 
        <Button 
        size="medium"
        onClick={() => { navigate("/add");}}>글쓰기</Button>
        </CdWrapper>
        <CdListContainer>게시글이 없습니다.</CdListContainer>
        </>
    )

    return ( 
        <>
        <CdWrapper> 
        <Button 
        size="medium"
        onClick={() => { navigate("/add");}}>글쓰기</Button>
        </CdWrapper>
        <CdListContainer>
        {cards.slice().reverse().map((card) => (
            <Card card={card} key={card.id}/>)
            )}
        
        </CdListContainer>
        </>
    )
}

export default CardList;

const CdWrapper = styled.div`
    display: flex;
    border: 0px;
    min-width: 600px;
    max-width: 1200px;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 2em;
`
// const CdButton = styled.button`
//     display: flex;
//     border: 1px solid #eee;
//     background-color: #afadad;
//     height: 46px;
//     border-radius: 8px;
//     margin-left: 80%;
// `

const CdListContainer = styled.div`
    display: block;
    flex-direction: column;
    border: 2.5px dotted #e8f5e9;
    min-width: 600px;
    max-width: 1200px;
    height: 100%;
    justify-content: center;
    background-color: #ffffff;
    margin: 1em;
    box-sizing: content-box
`;



