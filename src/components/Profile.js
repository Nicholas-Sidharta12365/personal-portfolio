import React from 'react';
import './Profile.css';
import '../App.css';
import {Link} from 'react-router-dom';

function Profile() {
  return( 
    <>
        <video src='/videos/video-1.mp4' autoPlay muted loop></video>
        <div className='content'>
            <h1>&lt;&nbsp;&nbsp;ABOUT ME&nbsp;&nbsp;/&nbsp;&gt;</h1>
            <img src='/images/img-me.jpg' alt="profile"></img>
            <div className='text'>
                <h2>Hello!</h2>
                <h3>I'm Nicholas, a Full-Stack Web Developer and Hackathon Enthusiast. I am currently pursuing a degree in <a href="https://cs.ui.ac.id" target="blank">Computer Science at University of Indonesia</a>. My favorite language to code in currently are Python and C++. In my spare times, I love to read about astronomy, join courses, and create projects with tools / technologies that I recently learnt. If you have anything to ask, feel free to contact me through any of my contact information that is provided in the <Link to='/'>main page</Link>.</h3>
            </div>
            <div className="tech">
                <h2>Technologies / Tools</h2>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/3/35/20190417225046%21The_C_Programming_Language_logo.svg/120px-The_C_Programming_Language_logo.svg.png" alt="C" width="80" height="80"/>
                    <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/0c3822689a6e278609fc9888bf5d89f3bdf9e6ea/icons/file_type_cpp3.svg" alt="C++" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="HTML" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="CSS" width="80" height="80"/>
                    <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/0c3822689a6e278609fc9888bf5d89f3bdf9e6ea/icons/file_type_sass.svg" alt="SASS" width="80" height="80"/> 
                    <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/0c3822689a6e278609fc9888bf5d89f3bdf9e6ea/icons/file_type_js.svg" alt="JS" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="REACTJS" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="NODEJS" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="JAVA" width="80" height="80"/>
                    <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/0c3822689a6e278609fc9888bf5d89f3bdf9e6ea/icons/file_type_php.svg" alt="PHP" width="80" height="80"/>
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="80" height="80"/>
                </div>
            </div>
            <div className="education">
                <h2>Education</h2>
                <div className='logo'>
                    <a href="https://ui.ac.id" target='blank'><img src="/images/uni_logo.png" alt="university"></img></a>
                    <a href="https://sma.kanisius.sch.id/" target='blank'><img src="/images/hs_logo.png" alt="highschool"></img></a>
                </div>
            </div>
            <div className="organization">
                <h2>Organization</h2>
                <div className='logo'>
                    <img src='/images/dsc_logo.png' alt="dsc"></img>
                </div>
            </div>
        </div>
    </>
    );
}

export default Profile;
