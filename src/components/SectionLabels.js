import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';

export class SectionLabels extends React.Component {
	render() {
		return (
			<div>
				<Parallax.Layer offset={1.08} speed={.05} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin', zIndex: 3, padding: ' 0 5%' }}>
					<p style={{ fontWeight: 600, fontSize: '5vmin' }}>Experience</p>
				</Parallax.Layer>

				<Parallax.Layer offset={2.08} speed={.05} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin', zIndex: 3, padding: ' 0 5%' }}>
					<p style={{ fontWeight: 600, fontSize: '5vmin' }}>Personal Projects</p>
				</Parallax.Layer>

				<Parallax.Layer offset={3.08} speed={.05} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', height: '5vmin', zIndex: 3, padding: ' 0 5%' }}>
					<p style={{ fontWeight: 600, fontSize: '5vmin' }}> Skills &lt; / &gt;</p>
					
				</Parallax.Layer>
			</div>
		)
	}
}