import React from 'react';
import Tilty from 'react-tilty'
import "./Logo.css"
import condor from './condor.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className="Tilty br2 ma4 mt0 shadow-2" reverse axis="x,y" scale={1.1} perspective={900} max={55} reset={true}>
        <div className="pa1"><img style={{paddingTop:'25px'}} alt='condor' src={condor}/></div>
      </Tilty>

    </div>
  )
}
export default Logo;