import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import {FullPage, Slide} from 'react-full-page'
import Home from './content/Home';
import Skill from './content/Skill';
import Portfolio from './content/Portfolio'
import Contact from './content/Contact'

class App extends Component {
  render() {
    return(
      <>
        <FullPage controls>
            <Slide><Home/></Slide>
            <Slide><Skill/></Slide>
            <Slide><Portfolio/></Slide>
            <Slide><Contact/></Slide>
        </FullPage>
      </>
    )
  }
}
export default App;
