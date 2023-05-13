import React from "react";
import { Route , Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Services from "../components/Services";


export default function Navigate() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/Home" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Contact" element={<Contact/>} ></Route>
        <Route path="/Gallery" element={<Gallery/>} ></Route>
        <Route path="/Services" element={<Services/>} ></Route>
      </Routes>
    </div>
  )
}
