import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring/dist/react-spring'
import Background from './assets/img/Background.JPG';
import avatar from './assets/img/ThomasKim.jpg';
import './index.css';
import { SectionLabels } from './components/SectionLabels';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';


class App extends React.Component {
  render() {
    return (
      <div>                
        <header className="header nav-bar fixed-top" style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor: 'rgba( 3,3,3,0.7)' }}>
          <div> 
          <div><a href="https://github.com/tomkim825/" target="_blank"  style={{padding: '5px', margin: '0 5px', color:'#517fa4'}}><i class="fab icon fa-github" ></i></a>
          <a href="https://www.linkedin.com/in/thomas-c-kim/" target="_blank"  style={{ padding: '5px', margin: '0 5px', color:'#517fa4'}}><i class="fab icon fa-linkedin"></i></a>
          <a href="mailto:tomkim825@gmail.com" style={{padding: '5px', margin: '0 5px', color:'#517fa4'}}><i class="fas icon  fa-envelope"></i></a>
            <span style={{fontWeight:600}}> Thomas Kim</span>
          </div>
          </div>
          <span>
            <span className = 'navButton' onClick={() => this.parallax.scrollTo(0)}>About</span> <span> | </span><span  className = 'navButton'  onClick={() => this.parallax.scrollTo(1)}> Portfolio </span><span> | </span><span  className = 'navButton'  onClick={() => this.parallax.scrollTo(2)}> Skills </span>
          </span>
      </header>

      <Parallax ref={ref => (this.parallax = ref)} pages={3}>

        <Parallax.Layer offset={0} speed={0} factor={3} style={{ background: 'linear-gradient(to top, #243949 0%, #517fa4 100%)'}} />

        <SectionLabels/>
        <AboutMe/>
        <Portfolio/>
        <Skills/>

      </Parallax>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

