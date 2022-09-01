import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import Input from "../elem/Input"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addComment } from "../redux/modules/commentListSlice";

const AddComments = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [comment, setComment] = useState({
        username: "",
        content: "",
    });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (comment.content === "" || comment.username === "") {
            return alert("모든 항목을 입력해주세요.");
        }
        dispatch(__addComment({ comment: id, ...comment }));
        setComment({
            username: "",
            content: "",
        });
    };

    const onChangeInputHandler = (event) => {
        const { name, value } = event.target;
        setComment({
            ...comment,
            [name]: value,
        });
    };


    return (
        <>
            <StAddComments onSubmit={onSubmitHandler}>
                <CommentBox>

                    <Namebox
                        type="text"
                        name="username"
                        placeholder="닉네임"
                        value={comment.username}
                        onChange={onChangeInputHandler}
                    />


                    <Input
                        type="text"
                        placeholder="댓글달기..."
                        name="content"
                        value={comment.content}
                        onChange={onChangeInputHandler}
                    />
                    <Btnbox>
                    <Button>등록하기</Button>
                    </Btnbox>
                </CommentBox>
            </StAddComments>
        </>
    )
}


export default AddComments;

const Namebox = styled.input`
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
    border: 1px solid gray;
    margin-right : 8px ;
`

const CommentBox = styled.div`
    display: flex;
`

const Btnbox = styled.div`
    float: right;
    margin-left: 8px;
`
const StAddComments = styled.form`
    align-items:center;
    height: 20px
`