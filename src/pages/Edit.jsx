import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Input from "../elem/Input";
import Button from "../elem/Button"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux/';
import { __getPosts} from "../redux/modules/post";
import { updataCard } from "../redux/modules/post"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit () {
  const navigate = useNavigate();
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const dispatch = useDispatch();
    const {error, cards} = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])


    let {id} = useParams();
    let cardIdex = cards.find(function(x){return x.id == id})

    function onedithandler() {
        
        if ( title ==="" || desc ==="") return       // 빈칸있을시 등록버튼 눌러도 실행x

        dispatch(
          updataCard({        
          
          id:id,
          title: title,
          desc: desc,
          }))
        
          navigate("/");
      }
    
    return (
        <Layout>
        <div>
        <h2>작성자 : {cardIdex?.name}</h2>
        
        
        <h2>제목</h2>
        <Input  
          type={"text"}
          placeholder={cardIdex?.title}
          maxLength={20}
          onChange={(e) => settitle(e.target.value)} 
          ></Input>
        
        <h2>내용</h2>
        <Textarea 
          rows="10"
          placeholder={cardIdex?.desc}
          onChange={(e) => setdesc(e.target.value)}
          />
        
        <Butbox>
        <Button onClick={onedithandler}>수정</Button>
        </Butbox>
    </div>
    </Layout>
    
)
}

export default Edit;

const Textarea = styled.textarea`
box-sizing: border-box;
width: 100%;
outline: none;
border-radius: 8px;
padding: 12px;
font-size: 14px;
border: 1px solid gray;
`;

const Butbox = styled.div`
text-align: center;
padding-top: 30px;

`