import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
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
        <header className="header nav-bar fixed-top" style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor: 'rgba( 30,30,30,0.6)' }}>
          <div> 
          <div><a href="https://github.com/tomkim825/" target="_blank"  style={{padding: '5px', margin: '0 5px', color:'black'}}><i class="fab fa-github" ></i></a><a href="https://www.linkedin.com/in/thomas-c-kim/" target="_blank"  style={{ padding: '5px', margin: '0 5px', color:'royalblue'}}><i class="fab fa-linkedin"></i></a><a href="mailto:tomkim825@gmail.com" style={{padding: '5px', margin: '0 5px', color:'red'}}><i class="fas fa-envelope"></i></a>

        
            <span className='header-name'> Thomas Kim</span>
</div>
          </div>
          <p>
            <span onClick={() => this.parallax.scrollTo(0)}>About</span> <span onClick={() => this.parallax.scrollTo(1)}> | Portfolio </span><span onClick={() => this.parallax.scrollTo(2)}> | Skills </span>
          </p>
      </header>

      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <Parallax.Layer offset={0} speed={0} factor={3} style={{ background: 'linear-gradient(to top, #09203f 0%, #537895 100%)'}} />
        <SectionLabels/>

        <Parallax.Layer
          offset={0.95}
          speed={10}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', flexDirection:"column",  alignItems: 'center', zIndex:6}}>
          <h6 style={{lineHeight:'0'}}> Portfolio </h6>
        <h2> v </h2>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1.95}
          speed={10}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', flexDirection:"column",  alignItems: 'center',zIndex:5}}>
          <h6 style={{lineHeight:'0'}}> Skills </h6>
        <h2> v </h2>
        </Parallax.Layer>
      
        <AboutMe/>
        <Portfolio/>
        <Skills/>

      </Parallax>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

