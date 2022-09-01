import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { __deletePosts, __getPosts, __showPosts } from "../redux/modules/post";
import { useNavigate } from "react-router-dom";
import CommentList from "../comments/CommentList"

function CardDetail( ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, cards } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])


    let { id } = useParams();

    let cardIdex = cards.find(function (x) { return x.id == id })



    const onRemove = () => {
        if (window.confirm("정말 삭제합니까?")) {
            dispatch(
                __deletePosts(id));
            alert("삭제되었습니다.");
            console.log("홈이동");
            navigate("/")
        } else {
            alert("취소합니다.");
        }
    };

    return (
        <>
            <DetailBox>
                <h2>작성자</h2> 
                <p>{cardIdex?.name}</p>
                <h2>제목</h2>
                <p>{cardIdex?.title}</p>
                <h2>내용</h2>
                <p>{cardIdex?.desc}</p>
                <Butbox>
                <Button onClick = {()=>{navigate(`/edit/${id}`)}}>수정하기</Button>
                <Button onClick={() => { onRemove() }}>삭제하기</Button>
                </Butbox>

            </DetailBox>

            <CommentList/>

        </>

    )
}

export default CardDetail;

const DetailBox = styled.div`
            border:1px solid gray;
            border-radius: 15px;
            height: 500px;
            margin-top:30px;
            padding: 30px;
            `

const Butbox = styled.div`
        margin-top: 120px;
        margin-left : 980px ;
        display: flex;
        
`