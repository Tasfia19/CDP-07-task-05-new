import React from 'react'
import './Contact.css'
import addressImage from '../assets/address.png'
import gitImage from '../assets/git.png'
import gmailImage from '../assets/gmail.png'
import phoneImage from '../assets/phone.png'
import linkImage from '../assets/link.png'

const Contact = () =>{
    return(
        <div className="container">
      <div className="box">
        <section className="Contact" id="Contact">
          <h1 className="name">_____________Contact___________</h1>
          <div className="content-5">
            <div className="form">
              <div className="contact-info">
                <h3 className="title">Let's get in touch</h3>
                <p className="text">
                  Hi....Here is my Contact Info & I am available on phone 24/7....Thank You.
                </p>

                <div className="info">
                  <div className="information">
                    <img src={addressImage} className="icon" alt="" />
                    <p>Hathazary, Chittagong</p>
                  </div>
                  <div className="information">
                    <img src={gmailImage} className="icon" alt="" />
                    <p>tasfiachy19@gmail.com</p>
                  </div>
                  <div className="information">
                    <img src={phoneImage} className="icon" alt="" />
                    <p>01812326039</p>
                  </div>
                </div>

                <div className="social-media">
                  <p>Connect with us :</p>
                  <div className="social-icons">
                    <a href="https://github.com/Tasfia19" target="_blank">
                      <img src={gitImage} alt="GitHub Profile" className="button-image" />
                    </a>

                    <a href="https://www.linkedin.com/in/tasfiatabassum19/" target="_blank">
                      <img src={linkImage} alt="LinkedIn Profile" className="button-image" />
                    </a>
                    <a href="mailto:gmail.com">
                      <img src={gmailImage} alt="Email" className="button-image" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label htmlFor="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label htmlFor="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    )
}
export default Contact