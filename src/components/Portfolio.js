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
                <br/>Does your child look more like mom or dad? Find out w/facial recognition
                <br/><span><a href="https://github.com/tomkim825/which-parent" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/which-parent/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work2 work" > </div>
              <div className="back">
                <p>Web App w/Azure 
                <br/>Face Recognition APIs: 
                <br/>Find your MCU doppleganger
                <br/><span><a href="https://github.com/tomkim825/Project1-FaceAPI" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/Project1-FaceAPI/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work3 work" > </div>
              <div className="back">
                <p>React Native App using EXPO: 
                <br/>Digital Business cards
                <br/><span><a href="https://github.com/tomkim825/meishi" target="_blank" rel="noopener noreferrer">Github Repo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work4 work bottom" > </div>
              <div className="back">
                <p>Full-Stack app showing full CRUD functionality:
                <br/> MySQL, Node, Express, Heroku
                <br/><span><a href="https://github.com/tomkim825/burger" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://eat-da-burger--.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work5 work bottom" > </div>
              <div className="back bottom">
                <p>Web App using Giphy API to search GIFs
                <br/>built with AJAX and Bootstrap
                <br/><span><a href="https://github.com/tomkim825/GifGetter/" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/GifGetter/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flipper">
              <div className="front work6 work bottom" > </div>
              <div className="back bottom">
                <p>Web app using Realtime database - Firebase
                <br/><span><a href="https://github.com/tomkim825/TrainTime/" target="_blank" rel="noopener noreferrer">Github Repo</a></span> <span><a href="https://tomkim825.github.io/TrainTime/" target="_blank" rel="noopener noreferrer" style={{color:'red'}}>Demo</a></span></p>
              </div>
            </div>
          </div>
        </Parallax.Layer>
        </div>
    )
  }
}


