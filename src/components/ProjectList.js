import React from 'react';
import CardItems from './CardItems'
import './ProjectList.css';


function ProjectList() {
  return(
    <>
      <div className="project__container">
          <video src='/videos/video-4.mp4' autoPlay muted loop></video>
          <h1>[ Project List ]</h1>
          <div className='project__cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItems
                      src='images/studymate.png'
                      text='Studymate: An Online Learning Web Application'
                      label='Projects'
                      path='/projects'
                      />
                      <CardItems
                      src='images/nightsky.png'
                      text='The Night Sky: An Educative AR based Space Application'
                      label='Projects'
                      path='/projects'
                      />
                      <CardItems
                      src='images/medsync.png'
                      text='Medsync: Bloodsugar Prediction Application'
                      label='Projects'
                      path='/projects'
                      />
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
