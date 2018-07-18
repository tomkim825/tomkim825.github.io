import React from 'react';
import { Parallax } from 'react-spring';
import '../index.css';


export class SectionLabels extends React.Component {
  render() {
    return (
<div>
    <Parallax.Layer
        offset={1.06}
        speed={5}
        style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin',zIndex:3}}>
        <p style={{textShadow: '6px 6px 0px rgba(0,0,0,0.2) ',fontWeight:600}}>Portfolio</p>
    </Parallax.Layer>
        
    <Parallax.Layer
        offset={2.06}
        speed={5}
        style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin',zIndex:3}}>
        <p style={{textShadow: '6px 6px 0px rgba(0,0,0,0.2) ',fontWeight:600}}> Skills &lt; / &gt; </p>
    </Parallax.Layer>

    <Parallax.Layer
        offset={3.06}
        speed={5}
        style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin',zIndex:3}}>
        <p style={{textShadow: '6px 6px 0px rgba(0,0,0,0.2) ',fontWeight:600}}> Contact </p>
    </Parallax.Layer>
</div>
    )}}