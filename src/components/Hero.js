import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src='/videos/video1.mp4' autoPlay loop muted />
        <p>./Hello, World!</p>
        <h1>Nicholas Sidharta</h1>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' buttonDestination='about'>ABOUT ME</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' buttonDestination='projects'>PROJECTS</Button>
        </div>
    </div>
  );
}

export default Hero;