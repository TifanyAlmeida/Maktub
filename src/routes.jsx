import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HauweiServices from "./pages/HauweiServices"
import HauweiSecurity from "./pages/HauweiSecurity"
import HauweiConnect from "./pages/HauweiConnect"


export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HauweiServices />} />
        <Route path="/hauweisecurity" element={<HauweiSecurity/>} />
        <Route path="/hauweiconnect" element={<HauweiConnect/>} />
      </Routes>
    </BrowserRouter>
   )
}