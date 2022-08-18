import React from 'react'
import AwardCards from './AwardCards'

function Completions() {
  return (
    <div className='achievements_container'>
        <video src='/videos/video-3.mp4' autoPlay muted loop></video>
        <h1>( Achievements )</h1>
        <div className="awards_container">
            <h3>Awards</h3>
            <AwardCards
            path = ''
            label = ''
            src = ''
            text = ''
            />
        </div>
        <div className="completed_course_container">
            <h3>Completed Courses</h3>

        </div>
    </div>
  )
}

export default Completions