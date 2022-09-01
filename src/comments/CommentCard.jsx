import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { removeComment , updataComment } from "../redux/modules/commentListSlice";


function CommentCard({ comment }) {
  // const {id} = useParams();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [desc,setdesc] = useState("");
  
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다.");
      dispatch(
        removeComment(comment.id));
  } else {
      alert("취소합니다.");
  }
}
const handleClickUpdateBtn = () => {
  setIsEdit(true);
};

const handleUpdateComment = () =>{
  dispatch(updataComment({
    id:comment.id,
    content: desc,
    username: comment.username,
    comment : comment.comment
  }),
  setIsEdit(false))
}

const handleClickCancleBtn = () => {
  setIsEdit(false);
};
  
  
  return (
    <CommentContainer>
        <Comment>
          {comment.username} 
        </Comment>
        {isEdit ?
        <Iinput type={"text"}
        onChange={(e) => setdesc(e.target.value)}></Iinput> :
        <Comment2>
          {comment.content} 
        </Comment2>}
         
      
      {isEdit ?
      <Btns>
        <button
          onClick = {handleClickCancleBtn}
        ><RiArrowGoBackFill /></button>
        <button onClick={handleUpdateComment}><BsCheckLg /></button>
      </Btns>
      :
      <Btns>
        <button
          onClick = {()=>{onRemove()}}
        ><BsFillTrashFill /></button>
        <button onClick={handleClickUpdateBtn}><AiFillEdit/></button>
      </Btns> }
      
    </CommentContainer> 
  
  
  )
}


export default CommentCard;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    height: auto;
    
    
`

const Comment = styled.div`
    border-radius: 8px;
    padding: 7px;
    font-size: 14px;
    border: 1px solid gray;
    margin-left : 8px ;
    width: 130px;
    position: absolute;
    
   
`
const Comment2 = styled.div`
   border: 1px solid gray;
    border-radius: 8px;
    padding: 7px;
    font-size: 14px;
    margin-left : 190px ;
    width: 770px;
    position: absolute;
    
`

const Btns = styled.div`
    margin-left : 980px ;
    padding: 7px;
    position: absolute;
    `

const Iinput = styled.input`
  border: 1px solid gray;
    border-radius: 8px;
    padding: 7px;
    font-size: 14px;
    margin-left : 190px ;
    width: 770px;
    position: absolute;
`