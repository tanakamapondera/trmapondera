import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div role="button" tabIndex={0} className="close" onClick={() => {this.props.onCloseArticle()}} onKeyDown={this.handleClick}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hello! My name is Tanaka. I'm a <strong>Platform Engineer</strong> at <strong><a href="https://www.anant.us/home">Anant Corporation</a></strong> in Washington D.C.. We design, build, and manage business platforms for big and small businesses, specializing in <strong>information systems</strong>, <strong>data analytics</strong> and <strong>customer experience</strong>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Under Construction :)</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>I'm originally from Harare, Zimbabwe but I currently live in Washingotn D.C. Growing up, I was fortunate enough to travel the world and live in 5 different countries. I am fluent in English and I can get by with the basic of French. I wish to add Japanese and American Sign Language to my toolkit one day!</p>
          <p>I'm an avid spsorts fan. I supoort Arsenal FC in the English Premier League. I also play just about every sport there is out there except for volleyball. I also enjoy watching movies, action/adventure & horror being my favorite, and I also love listening to music, everything except heavy metal & country.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
          <ul className="icons">
            <li><a href="https://twitter.com/MaponderaTanaka" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/tanaka-mapondera-59787260/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/tanakarm/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/tanakamapondera" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main