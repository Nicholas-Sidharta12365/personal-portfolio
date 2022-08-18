import React from 'react';
import './Contacts.css'

function Contacts() {
  return (
    <>
        <div className='contacts'>
            <h1>Contacts</h1>
            <ul className="icons">
            <a href="mailto:sidharta.nic@gmail.com" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="Linkedin Profile" height="50" width="65" /></a>
                <a href="https://www.linkedin.com/in/nicholas-sidharta-693a78192/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="Linkedin Profile" height="55" width="55" /></a>
                <a href="https://github.com/Nicholas-Sidharta12365" target="blank"><img src="/images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png" alt="Github" height="60" width="60" /></a>
            </ul>
        </div>
    </>
    );
}

export default Contacts;
