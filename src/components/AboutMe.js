import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';
import avatar from '../assets/img/ThomasKim.jpg';

export class AboutMe extends React.Component {
    constructor (props) {
        super(props);
        this.diff = new Date() - new Date(2018, 10, 1);
        this.years = Math.round((this.diff) / (365 * 24 * 60 * 60 * 100)) / 10;
        this.experienceFraction = this.years - Math.round((this.years));
        this.qualifier = this.experienceFraction < 0 ? "about" : "over";
    }

  render() {
    return (
    <div style={{alignContent: 'space-between'}}>
        <Parallax.Layer offset={0} speed={0.75} style={{ display: 'flex', flexDirection:"column", alignContent: 'center', justifyContent: 'center',zIndex:5, padding:'0 5%', marginTop:'2%'}}>
            <img src={avatar} className='avatar' style={{height:'20vh',width: '20vh', borderRadius:'50%', border: '0.33vmin solid rgba(255,255,255,0.8)', marginBottom:'5%', boxShadow: '0px 0px 9px 4px rgba(255,255,255,0.5)'}} alt='about me'/>
            <p style={{marginBottom:'4vmin', fontSize:'7vmin', fontWeight:400}}>Thomas Kim</p>
            <p> {`Welcome! I'm a developer with ${this.qualifier} ${Math.round((this.years))} years of experience. I currently work at Blue Shield of California, where I do front-end development in an agile team using Angular. Please continue for more info.`}</p>
        </Parallax.Layer>

        <Parallax.Layer offset={0} speed={0.25} style={{ display: 'flex', flexDirection:"column", alignContent: 'flex-start', justifyContent: 'flex-end', zIndex:4, padding:'0 4%'}}>

        </Parallax.Layer>
    </div>
    )}}