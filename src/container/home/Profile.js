import React from 'react'
import Typical from 'react-typical'

export const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>    
            <div className='profile-details'>
                <div className='colz'>
                    <a href='https://www.youtube.com/channel/UC-D0oplEDuB5uvguybhUoiA'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UC-D0oplEDuB5uvguybhUoiA'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UC-D0oplEDuB5uvguybhUoiA'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UC-D0oplEDuB5uvguybhUoiA'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UC-D0oplEDuB5uvguybhUoiA'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'> Eidan </span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical 
                                loop={Infinity}
                                steps={[
                                    "Passionate Dev ",
                                    2000,
                                    "Full Stack Developer",
                                    2000,
                                    "Spring Boot Developer",
                                    2000
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me {" "}
                    </button>
                    <a href='resume.pdf' download='Eidan resume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
