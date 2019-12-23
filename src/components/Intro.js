import React from 'react'
import pic01 from '../images/pic01.jpg'

function Intro () {
  return (
    <div>
        <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hello! My name is Tanaka. I'm a <strong>Platform Engineer</strong> at <strong><a href="https://www.anant.us/home">Anant Corporation</a></strong> in Washington D.C.. We design, build, and manage business platforms for big and small businesses, specializing in <strong>information systems</strong>, <strong>data analytics</strong> and <strong>customer experience</strong>.</p>
    </div>
  )
}

export default Intro