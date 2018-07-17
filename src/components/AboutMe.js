import React from 'react';
import { Parallax } from 'react-spring';
import '../index.css';


export class AboutMe extends React.Component {
  render() {
    return (
<div>
<Parallax.Layer
           offset={0}
          speed={0.45}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'center', justifyContent: 'center',zIndex:5}}>
          <p style={{marginBottom:'7vmin', fontSize:'10vmin', fontWeight:600}}>Hi! I'm Thomas, Full Stack Developer</p>
          <div><a href="https://github.com/tomkim825/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'black'}}><i class="fab fa-github" ></i> Github    </a><a href="https://www.linkedin.com/in/thomas-c-kim/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'blue'}}><i class="fab fa-linkedin"></i> LinkedIn </a><a href="mailto:tomkim825@gmail.com" style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'red'}}><i class="fas fa-envelope"></i> Email Me  </a></div>

</Parallax.Layer>


<Parallax.Layer
          offset={0}
          speed={0.75}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'flex-start', justifyContent: 'flex-end',zIndex:4}}>
          <p style={{marginBottom:'7vmin'}}>MERN-stack developer (MongoDB/MySQL Express React Node). I enjoy making web apps in REACT. My next challenge is to use REACT-NATIVE to build mobile apps. I'm also learning how to make Progressive Web Apps to submit to app stores.
          <br/>
          <br/><small>I have many side hobbies. I took this picture at Lake Moraine while visiting Banff, Canada.</small></p>
</Parallax.Layer>
<Parallax.Layer
          offset={0.7}
          speed={0.25}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'flex-end', justifyContent: 'flex-end', marginBottom:'7vmin', backgroundColor:'rgba(30,30,30,0.5)', height:'23vh'}}>
</Parallax.Layer>
</div>
    )}}