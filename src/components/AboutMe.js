import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';
import avatar from '../assets/img/ThomasKim.jpg';
import firebase from '../config/firebase.js';


export class AboutMe extends React.Component {
    constructor (props) {
        super(props);
    this.state = {
        blurb: 'MERN-stack developer (MongoDB/MySQL Express React Node). I enjoy making PWAs in REACT.'
    }
}
componentDidMount(){
    const itemsRef = firebase.database().ref();
    itemsRef.on('value', (snapshot) => {
    var blurb = snapshot.val().blurb;
    this.setState({blurb});
    })}


  render() {
    return (
<div>
<Parallax.Layer
           offset={0}
          speed={0.75}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'center', justifyContent: 'center',zIndex:5,padding:'0 5%', marginTop:'-2%'}}>
              <img src={avatar} className='avatar' style={{height:'20vh',width: '20vh', borderRadius:'50%', border: '1vmin solid rgba(3,3,3,0.6)', marginBottom:'5%', boxShadow: '0px 0px 9px 1px rgba(0,0,0,0.5)'}} alt='about me'/> 
          <p style={{marginBottom:'7vmin', fontSize:'7vmin', fontWeight:600}}>Hi! I'm Thomas, Full Stack Developer</p>
          {/* <div><a href="https://github.com/tomkim825/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'black'}}><i class="fab fa-github" ></i> Github    </a><a href="https://www.linkedin.com/in/thomas-c-kim/" target="_blank"  style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'blue'}}><i class="fab fa-linkedin"></i> LinkedIn </a><a href="mailto:tomkim825@gmail.com" style={{border:'1px solid white', padding: '5px', margin: '0 5px', color:'red'}}><i class="fas fa-envelope"></i> Email Me  </a></div> */}

</Parallax.Layer>



<Parallax.Layer
          offset={0}
          speed={0.25}
          style={{ display: 'flex', flexDirection:"column", alignContent: 'flex-start', justifyContent: 'flex-end',zIndex:4,padding:'0 4%'}}>
          <p style={{marginBottom:'15vmin'}}> {this.state.blurb}          </p>
</Parallax.Layer>
</div>
    )}}