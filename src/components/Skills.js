import React from 'react';
import { Parallax } from 'react-spring';
import '../index.css';

export class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = {
      angular: startedSkill(2020, 11, 1),
      react: deadSkill(2019, 3, 1, 2020, 2, 20),
      html: startedSkill(2018, 1, 1),
      css: startedSkill(2018, 1, 1),
      sass: startedSkill(2019, 3, 1),
      js: startedSkill(2016, 0, 1),
      ts: startedSkill(2020, 11, 1),
      jq: deadSkill(2018, 2, 1, 2021, 10, 1),
      bootstrap: deadSkill(2020, 0, 1, 2021, 10, 1),
      foundation: deadSkill(2019, 3, 1, 2021, 10, 1),
      sql: deadSkill(2018, 3, 1, 2018, 7, 1),
      mongo: deadSkill(2018, 3, 1, 2018, 7, 1),
      express: deadSkill(2018, 3, 1, 2018, 7, 1),
      node: deadSkill(2018, 3, 1, 2018, 7, 1),
      heroku: deadSkill(2018, 3, 1, 2018, 7, 1),
      sequelize: deadSkill(2018, 3, 1, 2018, 7, 1),
      firebase: deadSkill(2018, 3, 1, 2018, 7, 1),
      github: startedSkill(2018, 2, 1),
      git: startedSkill(2018, 2, 1),
      bitbucket: deadSkill(2020, 3, 1, 2021, 10, 1),
      confluence: startedSkill(2019, 3, 1),
      jira: startedSkill(2019, 3, 1),
      figma: deadSkill(2020, 3, 1, 2021, 10, 1),
      sketch: deadSkill(2019, 7, 1, 2020, 3, 1),
      photoshop: deadSkill(2019, 3, 1, 2020, 3, 1),
      invision: startedSkill(2020, 3, 1),
    }
    function startedSkill(yyyy, m, d) {
      const years = Math.round((new Date() - new Date(yyyy, m, d)) / (365 * 24 * 60 * 60 * 250)) / 4
      const qualifier = years < 1 ? " year" : " years"
      return years + qualifier
    }
    function deadSkill(yyyy, m, d, yyyy2, m2, d2) {
      const years = Math.round((new Date(yyyy2, m2, d2) - new Date(yyyy, m, d)) / (365 * 24 * 60 * 60 * 250)) / 4
      const qualifier = years <= 1 ? " year" : " years"
      return years + qualifier
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'start', width: '100vw', padding: ' 0 5%' }}>
        <Parallax.Layer
          offset={3.15}
          speed={0.2}
          style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', zIndex: 2 }}>
          <p style={{ color: 'orangered', fontWeight: 600, textDecoration: 'underline' }}> Front End </p> 
          <ul className="list-inline list-icons">
            <li className="list-inline-item" title="Angular">
              <i className="devicon-angularjs-plain"></i>
              <p className="skill">{this.skills.angular}</p>
            </li>
            <li className="list-inline-item pos-rel" title="React">
              <i className="devicon-react-original-wordmark"></i>
              <p className="skill">{this.skills.react}</p>
            </li>
            <li className="list-inline-item" title="HTML">
              <i className="devicon-html5-plain-wordmark"></i>
              <p className="skill">{this.skills.html}</p>
            </li>
            <li className="list-inline-item" title="CSS">
              <i className="devicon-css3-plain-wordmark"></i>
              <p className="skill">{this.skills.css}</p>
            </li>
            <li className="list-inline-item" title="SASS">
              <i className="devicon-sass-original"></i>
              <p className="skill">{this.skills.sass}</p>
            </li>
            <li className="list-inline-item" title="JavaScript">
              <i className="devicon-javascript-plain"></i>
              <p className="skill">{this.skills.js}</p>
            </li>
            <li className="list-inline-item" title="Typescript">
              <i className="devicon-typescript-plain"></i>
              <p className="skill">{this.skills.ts}</p>
            </li>
            <li className="list-inline-item" title="jQuery">
              <i className="devicon-jquery-plain-wordmark"></i>
              <p className="skill">{this.skills.jq}</p>
            </li>
            <li className="list-inline-item" title="Bootstrap">
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <p className="skill">{this.skills.bootstrap}</p>
            </li>
            <li className="list-inline-item" title="Foundation">
              <i className="devicon-foundation-plain-wordmark"></i>
              <p className="skill">{this.skills.foundation}</p>
            </li>

          </ul>
        </Parallax.Layer>

        <Parallax.Layer
          offset={3.3}
          speed={0.6}
          style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', zIndex: 2 }}>
          <p style={{ color: 'orangered', fontWeight: 600, textDecoration: 'underline' }}> Server Side </p>
          <ul className="list-inline list-icons">
            <li className="list-inline-item" title="mySQL">
              <i className="devicon-mysql-plain-wordmark"></i>
              <p className="skill">{this.skills.sql}</p>
            </li>
            <li className="list-inline-item" title="MongoDB">
              <i className="devicon-mongodb-plain-wordmark"></i>
              <p className="skill">{this.skills.mongo}</p>
            </li>
            <li className="list-inline-item" title="Express">
              <i className="devicon-express-original-wordmark"></i>
              <p className="skill">{this.skills.express}</p>
            </li>
            <li className="list-inline-item" title="NodeJS">
              <i className="devicon-nodejs-plain-wordmark"></i>
              <p className="skill">{this.skills.node}</p>
            </li>
            <li className="list-inline-item" title="Heroku">
              <i className="devicon-heroku-original-wordmark"></i>
              <p className="skill">{this.skills.heroku}</p>
            </li>
            <li className="list-inline-item" title="Sequelize">
              <i className="devicon-sequelize-plain-wordmark"></i>
              <p className="skill">{this.skills.sequelize}</p>
            </li>
            <li className="list-inline-item" title="Firebase">
              {/* <i className="devicon-firebase-plain-wordmark"></i> */}
              <p className="skill-text">Firebase</p>
              <p className="skill">{this.skills.firebase}</p>
            </li>

          </ul>
        </Parallax.Layer>


        <Parallax.Layer
          offset={3.45}
          speed={1}
          style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', zIndex: 2 }}>
          <p style={{ color: 'orangered', fontWeight: 600, textDecoration: 'underline' }}>Dev Tools </p>
          <ul className="list-inline list-icons">
            <li className="list-inline-item" title="Github">
              <i className="devicon-github-plain-wordmark"></i>
              <p className="skill">{this.skills.github}</p>
            </li>
            <li className="list-inline-item" title="Git">
              <i className="devicon-git-plain-wordmark"></i>
              <p className="skill">{this.skills.git}</p>
            </li>
            <li className="list-inline-item" title="Bitbucket">
              <i className="devicon-bitbucket-original-wordmark"></i>
              <p className="skill">{this.skills.bitbucket}</p>
            </li>
            <li className="list-inline-item" title="Confluence">
              <i className="devicon-confluence-original"></i>
              <p className="skill">{this.skills.confluence}</p>
            </li>
            <li className="list-inline-item" title="JIRA">
              <i className="devicon-jira-plain-wordmark"></i>
              <p className="skill-text">JIRA</p>
              <p className="skill">{this.skills.jira}</p>
            </li>

            <li className="list-inline-item" title="Photoshop">
              <p className="skill-text">Photoshop</p>
              <p className="skill">{this.skills.photoshop}</p>
            </li>
            <li className="list-inline-item" title="Figma">
              <i className="devicon-figma-plain"></i>
              <p className="skill-text">Figma</p>
              <p className="skill">{this.skills.figma}</p>
            </li>
            <li className="list-inline-item" title="Sketch">
              <i className="devicon-sketch-line"></i>
              <p className="skill-text">Sketch</p>
              <p className="skill">{this.skills.sketch}</p>
            </li>
            <li className="list-inline-item" title="Invision">
              <p className="skill-text">Invision</p>
              <p className="skill">{this.skills.invision}</p>
            </li>

          </ul>
        </Parallax.Layer>

        <Parallax.Layer
          offset={3.6}
          speed={1.5}
          style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', zIndex: 4 }}>
          <p style={{ color: 'orangered', fontWeight: 600, textDecoration: 'underline' }}>Resume </p>

          <div><a href="https://github.com/tomkim825/tomkim825.github.io/raw/master/ThomasKimResume.pdf" style={{ border: '1px solid white', padding: '5px', margin: '0 5px', color: 'white' }}>       Click here to download   </a></div>

        </Parallax.Layer>
      </div>
    )
  }
}


