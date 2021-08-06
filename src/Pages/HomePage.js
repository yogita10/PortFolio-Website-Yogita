import React from 'react';
import { faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Yogita Khurana,</span>
                </h1>
                <p className="h-sub-text">
                    Pursuing my B.tech in Information Technology from Indira Gandhi Delhi Technical University for Women(IGDTUW).
                    I am a competitive coder with 3⭐ rating on Codechef as well as on Leetcode.  
                    I also have a passion for web development.  

                </p>
                <div className="icons">
                   
                    <a href="https://www.linkedin.com/in/yogita10/" target="_blank" rel="noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon gh" />
                    </a>
                    <a href="https://github.com/yogita10" target="_blank" rel="noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://twitter.com/Yogita1_Khurana" target="_blank" rel="noreferrer" className="icon-holder">
                    <FontAwesomeIcon icon={faTwitter} className="icon gh"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
