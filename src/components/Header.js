import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Tanaka Ryan Mapondera</h1>
                <p>Welcome To My Personal Website</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/#" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="/#" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="/#" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="/#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
