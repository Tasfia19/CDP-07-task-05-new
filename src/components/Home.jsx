import React from 'react'
import './Home.css'
const Home = () =>{
    return(
      <div className="container">
      <div className="box">
        <nav>
          <a href="#" className="logo">Tasfia Tabassum</a>
          <ul>
            <li><a className="btn" href="#about">About Me</a></li>
            <li><a className="btn" href="#Experience">Experience</a></li>
            <li><a className="btn" href="#Project">Project</a></li>
            <li><a className="btn" href="#Contact">Contact</a></li><br/>
            <li><a className="btn" href="https://drive.google.com/file/d/1-rwL6L7YfvwaJv9D4BNuecEYph7zZwzi/view?usp=drive_link">Resume</a></li>
          </ul>
        </nav>
        <div className="contains">
          <div className="section-1">
            <h3>A competent Competitive Programmer & A Frontend Developer</h3>
            <p>I have solved over 1100 problems on many onsite & offsite platforms & I am a front-end developer.</p>
            <a className="btn" href="#Contact">Contact</a>
          </div>
          <div className="section-2">
            <img src="./Tasfia mim.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    )
}
export default Home