import React from "react";
import Layout from "../components/Layout";
import Input from "../elem/Input";
import Button from "../elem/Button"
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/modules/post"
import { v4 as uuidv4 } from 'uuid';





function Add () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
   
      
    // console.log(useSelector((state) => state.post))   
      
    function submit() {
        
        if (name ==="" || title ==="" || desc ==="") return       // 빈칸있을시 등록버튼 눌러도 실행x

        dispatch(
          addCard({        
          id: uuidv4(),
          name: name,
          title: title,
          desc: desc,
          }))
        
          navigate("/");
      }
      

    return (
       <>
        <Layout>
            <div>
            <h2>작성자</h2>
            <Input 
              type={"text"} 
              placeholder="작성자의 이름을 입력해주세요. (5자 이내)" 
              maxLength={5}
              onChange={(e) => setname(e.target.value)}
              
              ></Input>
            
            <h2>제목</h2>
            <Input  
              type={"text"}
              placeholder="제목을 입력해주세요. (20자 이내)"
              maxLength={20} 
              onChange={(e) => settitle(e.target.value)}
              
              ></Input>
            
            <h2>내용</h2>
            <Textarea 
              rows="10"
              placeholder="내용을 입력해주세요."
              onChange={(e) => setdesc(e.target.value)}
              />
            
            <Butbox>
            <Button onClick={submit}>등록</Button>
            </Butbox>
        </div>
        </Layout>
        </>
    )
}

export default Add;

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