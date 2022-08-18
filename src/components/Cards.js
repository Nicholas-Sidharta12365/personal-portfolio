import React from 'react';
import CardItems from './CardItems';
import './Card.css'

function Cards() {
  return( 
    <>
        <div className='cards'>
          <h1>Highlights!</h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems
                    src='images/studymate.png'
                    text='Studymate: An Online Learning Web Application'
                    label='Projects'
                    path='/projects'
                    />
                </ul>
              </div>
          </div>
        </div>
    </>
  );
}

export default Cards;
