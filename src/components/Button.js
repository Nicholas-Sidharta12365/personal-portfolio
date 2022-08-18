import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const GOTO = ['about', 'projects'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    buttonDestination
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

        const checkButtonGoTo = GOTO.includes(buttonDestination)
        ? buttonDestination
        : GOTO[0];

        return (
            <Link to={`/${checkButtonGoTo}`} className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        );
    };