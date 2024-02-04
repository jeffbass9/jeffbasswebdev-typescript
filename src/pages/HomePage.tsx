import React from "react";
import logo from '../logo.svg';
import Header from "../components/Header";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

function HomePage(){
  return(
    <>
        <div className="jb-container">
            <Header/>
            <Skills/>
            <ProjectList/>
            <Footer/>
        </div>
    </>
   
  )
}

export default HomePage;
