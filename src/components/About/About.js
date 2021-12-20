import React from 'react'
import './about.css'
import coder from '../../svgs/coder.svg'
import hand from '../../svgs/hand.svg'
import Type from './Type'


const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hey!! <img src={hand} alt="hand" className="wave" /> <br/>
                    <span className="info-name">
                        I am <span className="my-name">Bhavit singla</span>
                    </span>
                    <div className="typing">
                        <Type/>
                    </div>

                </div>
                <div className="about-img">
                    <img src={coder} alt="code svg"/>
                </div>
            </div>
            <div className='Social-Contact'>
                        <a href="https://github.com/bhavi-singla" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="git" className="fab fa-github fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.instagram.com/i_singla_bhavi" target="_blank" rel="noopener noreferrer" >
                            <div className="social-icon-div">
                                <i id="insta" className="fab fa-instagram fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.linkedin.com/in/bhavit-singla-36a460199" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="linkdin" className="fab fa-linkedin-in fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.facebook.com/bhavit.singla.7/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="facebook" className="fab fa-facebook fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.hackerrank.com/singla_bhavit78" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="hackerrank" className="fab fa-hackerrank fa-4x social-icon"></i>
							</div>
                        </a>
                        <a href="https://www.codechef.com/users/bhavi_singla" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="codechef" className="iconify" data-icon="simple-icons:codechef"></i>
							</div>
                        </a>
                        <a href="https://leetcode.com/bhavi_singla/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="leetcode" className="iconify" data-icon="simple-icons:leetcode"></i>
							</div>
                        </a>
                        <a href="https://www.hackerrank.com/singla_bhavit78" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon-div">
                                <i id="gfg" className="iconify" data-icon="simple-icons:geeksforgeeks"></i>
							</div>
                        </a>
            </div>
        </div>
    )
}

export default About
