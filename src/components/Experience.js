import React from 'react';
import { Parallax } from 'react-spring/dist/react-spring';
import '../index.css';


export class Experience extends React.Component {
  render() {
    return (
      <div>
        <Parallax.Layer offset={1.18} speed={0.25} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', flexWrap: 'wrap', padding: ' 1% 5%' }}>
          <div className="col-12 p-0">
            <div className="col-12 p-0">
              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                <h2 className="exp_title text-left">Software Engineer</h2>
                <span className="exp_date text-right">November 2021 - Present</span>
              </div>
              <h3 className="exp_company text-left">SportsEngine (NBC Sports)</h3>
              <h4 className="exp_text text-left">Frontend (Angular) development on the members and rosters team.</h4>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={1.38} speed={0.5} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', flexWrap: 'wrap', padding: ' 1% 5%' }}>
          <div className="col-12 p-0">
            <div className="col-12 p-0">
              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                <h2 className="exp_title text-left">Application Developer, Experienced</h2>
                <span className="exp_date text-right">April 2020 - November 2021</span>
              </div>
              <h3 className="exp_company text-left">Blue Shield of California</h3>
              <h4 className="exp_text text-left">Front end development and enhancements to member portal as part of an agile team using Angular. Support IBM Web Content Managment system, Akamai content delivery network, and other workflow processes.</h4>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={1.58} speed={0.75} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', flexWrap: 'wrap', padding: ' 1% 5%' }}>
          <div className="col-12 p-0">
            <div className="col-12 p-0">
              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                <h2 className="exp_title text-left">Front End Web Developer</h2>
                <span className="exp_date text-right">April 2019 - April 2020</span>
              </div>
              <h3 className="exp_company text-left">Tailored Brands</h3>
              <h4 className="exp_text text-left">Built multiple Joseph A. Bank homepage refreshes every week based on photoshop/sketch files from designers. Worked cross-functionally along business, product managers, designers, vendors, and marketing. I code HTML emails across multiple brands (Jos A. Bank, Mens Wearhouse, Moore's, and K&G Fashion). I participated in a UI/UX A/B testing agile group, directly resulting in increased conversion, sales, and revenue.</h4>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer offset={1.82} speed={1} style={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'start', flexWrap: 'wrap', padding: ' 1% 5%' }}>
          <div className="col-12 p-0">
            <div className="col-12 p-0">
              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                <h2 className="exp_title text-left">Web Developer (Contractor)</h2>
                <span className="exp_date text-right">November 2018 - February 2019</span>
              </div>
              <h3 className="exp_company text-left">PRO Unlimited, onsite at Gap, Inc</h3>
              <h4 className="exp_text text-left">Contractor at Gap, Inc. headquarters. Turned visual mock-ups from design team into code used for homepages on Old Navy’s international sites.</h4>
            </div>
          </div>
        </Parallax.Layer>

      </div>
    )
  }
}


