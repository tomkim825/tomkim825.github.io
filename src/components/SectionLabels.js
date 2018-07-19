import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';


export class SectionLabels extends React.Component {
  render() {
    return (
<div>
    <Parallax.Layer
        offset={1.08}
        speed={.05}
        style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin',zIndex:3, padding:' 0 5%'}}>
        <p style={{textShadow: '6px 6px 0px rgba(0,0,0,0.2) ',fontWeight:600}}>Portfolio</p>
    </Parallax.Layer>
        
    <Parallax.Layer
        offset={2.08}
        speed={.05}
        style={{ display: 'flex', flexDirection:"column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin',zIndex:3, padding:' 0 5%'}}>
        <p style={{textShadow: '6px 6px 0px rgba(0,0,0,0.2) ',fontWeight:600}}> Skills &lt; / &gt; </p>
    </Parallax.Layer>
</div>
    )}}