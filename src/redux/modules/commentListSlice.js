import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/comments", arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {  
    comments: [],
    isLoading: false,
    error: null,
};

export const commentListSlice = createSlice({
  name: "commentlist",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.comments = null;
    },
    removeComment(state, action){
      const index = state.comments.findIndex(comments =>  comments.id === action.payload);
      state.comments.splice(index,1);
      axios.delete(`http://localhost:3001/comments/${action.payload}`);
    },
    
    updataComment: (state, action) => {
      const index = state.comments.findIndex(comments =>  comments.id === action.payload.id);
      state.comments.splice(index,1,action.payload);              // 
      axios.patch(`http://localhost:3001/comments/${action.payload.id}`, action.payload)
    }

  },

  // extraReducer 기능 구현은 됬지만, 사용은 하지않았음
  extraReducers: {
    // 댓글 추가
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
      console.log(action.payload)
    },
    
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },

    // 댓글 조회
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload; 
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  }  
});


export const { removeComment,updataComment } = commentListSlice.actions;
export default commentListSlice.reducer;