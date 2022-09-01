import React from "react";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit"


function App() {

    return (
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/add" exact element={<Add/>}/>
        <Route path="/detail/:id" exact element={<Detail/>}/>
        <Route path="/Edit/:id" exact element={<Edit/>}/>
        </Routes>

    )


}

export default App;