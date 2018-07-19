import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';
import avatar from '../assets/img/ThomasKim.jpg';


export class AboutMe extends React.Component {
  render() {
    return (
<div>
<Parallax.Layer
           offset={0}
          speed={0.75}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'center', justifyContent: 'center',zIndex:5,padding:'0 5%', marginTop:'-2%'}}>
              <img src={avatar} style={{height:'20vmin',width: '20vmin', borderRadius:'50%', marginLeft:'45%', marginBottom:'5%', boxShadow: '0px 0px 9px 1px rgba(0,0,0,0.66)'}} alt='about me'/> 
          <p style={{marginBottom:'7vmin', fontSize:'9vmin', fontWeight:600}}>Hi! I'm Thomas, Full Stack Developer</p>
          {/* <div><a href="https://github.com/tomkim825/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'black'}}><i class="fab fa-github" ></i> Github    </a><a href="https://www.linkedin.com/in/thomas-c-kim/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'blue'}}><i class="fab fa-linkedin"></i> LinkedIn </a><a href="mailto:tomkim825@gmail.com" style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'red'}}><i class="fas fa-envelope"></i> Email Me  </a></div> */}

</Parallax.Layer>



<Parallax.Layer
          offset={0}
          speed={0.25}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'flex-start', justifyContent: 'flex-end',zIndex:4,padding:'0 4%'}}>
          <p style={{marginBottom:'15vmin'}}>MERN-stack developer (MongoDB/MySQL Express React Node). I enjoy making web apps in REACT. <br/>My next challenge is to use REACT-NATIVE and PWAs to build mobile apps.
          {/* <br/>
          <br/><small>I have many side hobbies. I took this picture at Lake Moraine while visiting Banff, Canada.</small> */}
          </p>
</Parallax.Layer>
</div>
    )}}