import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import {FullPage, Slide} from 'react-full-page'
import Home from './content/Home';
import Skill from './content/Skill';
import Portfolio from './content/Portfolio'
import Portfolio_Design from './content/Portfolio_Design'
import Contact from './content/Contact'

function App(){
 
  const afterChange=(destination)=>{
    console.log(destination.to)
  }
 
    return(
      <>
        <FullPage controls 
        afterChange={afterChange}
        >
            <Slide><Home/></Slide>
            <Slide><Skill/></Slide>
            <Slide><Portfolio/></Slide>
            <Slide><Portfolio_Design/></Slide>
            <Slide><Contact/></Slide>
        </FullPage>
      </>
    );
}
export default App;
