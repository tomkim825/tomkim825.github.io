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
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-css3-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-javascript-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-jquery-plain-wordmark"></i>
              </li>
              <li class="list-inline-item">
              <i class="devicon-bootstrap-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-react-original-wordmark"></i>
            </li>
            </ul>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2.3}
          speed={0.6}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:2}}>
          <p style={{color: 'orangered',fontWeight:600, textDecoration: 'underline'}}> Server Side </p>
          <ul class="list-inline list-icons">
            
            <li class="list-inline-item">
              <i class="devicon-mysql-plain-wordmark"></i>
              </li>
            <li class="list-inline-item">
              <i class="devicon-mongodb-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-express-original-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-nodejs-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-heroku-original-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-sequelize-plain-wordmark"></i>
            </li>
            </ul>
        </Parallax.Layer>

        
        <Parallax.Layer
          offset={2.45}
          speed={1}
          style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start',zIndex:2}}>
          <p style={{color:'orangered',fontWeight:600,textDecoration: 'underline'}}>Dev Tools </p>
          <ul class="list-inline list-icons">
            
            <li class="list-inline-item">
            <i class="devicon-visualstudio-plain-wordmark"></i>
              </li>
            <li class="list-inline-item">
            <i class="devicon-firefox-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-chrome-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-github-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-git-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-slack-plain-wordmark"></i>
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


