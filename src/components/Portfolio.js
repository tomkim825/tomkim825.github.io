import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';


export class Portfolio extends React.Component {
  render() {
    return (
<div>
        <Parallax.Layer
          offset={1.135}
          speed={0.25}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap', padding:' 0 5%' }}>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work1 work" > </div>
              <div className="back">
                <p>Mobile-First PWA using React : 
                <br/>Does your child look more like mom or dad? 
                <br/><span><a href="https://github.com/tomkim825/which-parent" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/which-parent/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span><br/><span><a href="https://www.microsoft.com/en-us/p/mom-or-dad-which-parent/9ncm6gg7vs7t" target="_blank" rel="noopener noreferrer" style={{color:'yellow'}}>Published in Windows App store</a></span> </p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work2 work" > </div>
              <div className="back">
                <p>Web App w/Azure Face AI: 
                <br/>Find your MCU doppleganger
                <br/>-- jQuery, Bootstrap, AJAX, Firebase --
                <br/><span><a href="https://github.com/tomkim825/Project1-FaceAPI" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/Project1-FaceAPI/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work3 work" > </div>
              <div className="back">
                <p>Native Mobile App: 
                <br/>Digital Business cards
                <br/>-- React Native, EXPO, Firebase --
                <br/><span><a href="https://github.com/tomkim825/meishi" target="_blank" rel="noopener noreferrer">Github Repo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work4 work bottom" > </div>
              <div className="back bottom">
              <p>Mobile-First PWA using React & Material UI : 
                <br/>Pivot-Points for stock trading 
                <br/><span><a href="https://github.com/tomkim825/Pivot-Points" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/Pivot-Points/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span><br/><span><a href="	https://www.microsoft.com/store/apps/9PK9S4738T6C" target="_blank" rel="noopener noreferrer" style={{color:'yellow'}}>Published in Windows App store</a></span> </p>
              </div>
            </div>
          </div>
          {/* <div className="flip-container">
            <div className="flipper">
              <div className="front work5 work bottom" > </div>
              <div className="back">
                <p>Full-Stack app showing full CRUD functionality:
                <br/> -- Bootstrap, MySQL, Node, Express, Heroku --
                <br/><span><a href="https://github.com/tomkim825/burger" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://eat-da-burger-0011.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div> */}
          {/* <div className="flip-container">
            <div className="flipper">
              <div className="front work6 work bottom" > </div>
              <div className="back bottom">
                <p>Web App using Giphy API to search GIFs
                <br/>-- jQuery, AJAX, Bootstrap --
                <br/><span><a href="https://github.com/tomkim825/GifGetter/" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/GifGetter/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div> */}
        </Parallax.Layer>
        </div>
    )
  }
}


