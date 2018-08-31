import React from 'react';
import { Parallax } from 'react-spring';
import '../index.css';

export class Skills extends React.Component {
  render() {
    return (
<div style={{display: 'flex', flexDirection:"row", alignItems: 'flex-start', justifyContent: 'start', width:'100vw', padding:' 0 5%'}}>

        <Parallax.Layer
          offset={2.15}
          speed={0.2}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:2}}>
          <p style={{color:'orangered',fontWeight:600,textDecoration: 'underline'}}> Front End </p>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicon-html5-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-css3-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-javascript-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-jquery-plain-wordmark"></i>
              </li>
              <li className="list-inline-item">
              <i className="devicon-bootstrap-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-react-original-wordmark"></i>
            </li>
            </ul>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2.3}
          speed={0.6}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:2}}>
          <p style={{color: 'orangered',fontWeight:600, textDecoration: 'underline'}}> Server Side </p>
          <ul className="list-inline list-icons">
            
            <li className="list-inline-item">
              <i className="devicon-mysql-plain-wordmark"></i>
              </li>
            <li className="list-inline-item">
              <i className="devicon-mongodb-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-express-original-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-nodejs-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-heroku-original-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-sequelize-plain-wordmark"></i>
            </li>
            </ul>
        </Parallax.Layer>

        
        <Parallax.Layer
          offset={2.45}
          speed={1}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:2}}>
          <p style={{color:'orangered',fontWeight:600,textDecoration: 'underline'}}>Dev Tools </p>
          <ul className="list-inline list-icons">
            
            <li className="list-inline-item">
            <i className="devicon-visualstudio-plain-wordmark"></i>
              </li>
            <li className="list-inline-item">
            <i className="devicon-firefox-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
            <i className="devicon-chrome-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
            <i className="devicon-github-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-git-plain-wordmark"></i>
            </li>
            <li className="list-inline-item">
            <i className="devicon-slack-plain-wordmark"></i>
            </li>
            </ul>
        </Parallax.Layer>

<Parallax.Layer
          offset={2.6}
          speed={1.5}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:4}}>
        <p style={{color:'orangered',fontWeight:600,textDecoration: 'underline'}}>Resume </p>
 
        <div><a href="https://github.com/tomkim825/tomkim825.github.io/raw/master/ThomasKimResume.pdf" style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'white'}}>       Click here to download   </a></div>



        </Parallax.Layer>
</div>
    )
  }
}


