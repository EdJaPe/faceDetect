import React from 'react';
import Tilty from 'react-tilty'
import "./Logo.css"

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className="Tilty br2 ma4 mt0 shadow-2" reverse axis="x,y" scale={1.1} perspective={900} max={55} reset={true}>
        <div>This is my content</div>
      </Tilty>

    </div>
  )
}
export default Logo;