import React, { useState } from 'react';
import './App.css';
import Vasantiimg from './Images/Vasanti.jpg';
import fruit from './Images/fruit-gues.jpg';
import portfolio from './Images/portfolio.jpg';
import rock from './Images/rock-paper-scissor.jpg';
import tic from './Images/tic-tac-toe.jpg';
import todo from './Images/todo.jpg';
import utube from './Images/utube.jpg';
import vasanti from './Images/Vasnti-img-backblak2.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('skill');

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div>
      <div id="bod">
        <div className="contain">
          <nav>
            <h4><span style={{ color: 'Red' }}>V</span>asanti</h4>
            <ul>
              <li><a href="#bod">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#serv">Projects</a></li>
              <li><a href="#servo">Contact</a></li>
            </ul>
          </nav>
          <div className="mid">
            <div className="mid1">
              <p>Front End Developer</p>
              <h1>Hi,<br />I'm G.V.V.N.D.Vasanti From Pamarru</h1>
            </div>
            <div className="mid2">
              <img src={vasanti} className="port-img" alt="Vasanti" />
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="contain">
          <div className="about-con">
            <div className="vas-di">
              <img src={Vasantiimg} className="about-img" alt="Vasanti" />
            </div>
            <div className="par-div">
              <p className="aboutme" style={{ color: 'white', margin: '3px' }}>About me</p>
              <p className="aboutme-para">
                I am an enthusiastic learner and keenly intended to learn web development.
                Believes in Hardwork and put all my efforts for the organization I would be collaborated with.
              </p>
              <div className="about-sec">
                <p className={`tab ${activeTab === 'skill' ? 'act-skill' : ''}`} onClick={() => handleTabClick('skill')}>Skills</p>
                <p className={`tab ${activeTab === 'education' ? 'act-skill' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
                <p className={`tab ${activeTab === 'personal' ? 'act-skill' : ''}`} onClick={() => handleTabClick('personal')}>Personal Details</p>
              </div>
              <div className={`skills ${activeTab === 'skill' ? 'act' : ''}`} id="skill">
                <p><span>Front-end Development</span><br />Implemented and maintained Front-end web applications</p>
                <p><span>Cyber Security</span><br />Had Knowledge on Cybersecurity</p>
              </div>
              <div className={`skills ${activeTab === 'education' ? 'act' : ''}`} id="education">
                <p><span>2022-current</span><br />Bachelor's in Computer science at VRSEC, Vijayawada</p>
                <p><span>2020-2022</span><br />Intermediate at Srinivasa Junior College, Vuyyuru</p>
                <p><span>2019-2020</span><br />SSC at Srinivasa School, Pamarru</p>
              </div>
              <div className={`skills ${activeTab === 'personal' ? 'act' : ''}`} id="personal">
                <p><span>Strengths</span><br />Consistency and Discipline</p>
                <p><span>Hobbies</span><br />Reading books, Learning new Languages</p>
                <p><span>Languages Known</span><br />Telugu, English, Hindi, Tamil, Kannada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="serv">
        <div className="contain">
          <h1>My Projects</h1>
          <div className="service-grid">
            <div className="pro-div">
              <img src={portfolio} className="po-im" alt="Portfolio" />
              <div className="layer">
                <h2>Portfolio</h2>
                <p>I have created a portfolio of mine which describes all accomplishments and learnings</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="pro-div">
              <img src={tic} className="po-im" alt="Tic-Tac-Toe" />
              <div className="layer">
                <h2>Tic-Tac-Toe</h2>
                <p>I have created a Tic-Tac-Toe game where two players play the game by placing 'X' and 'O'.</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="pro-div">
              <img src={fruit} className="po-im" alt="Fruit Guess" />
              <div className="layer">
                <h2>Fruit Guess</h2>
                <p>I have created a Fruit guess game where the player guesses the displayed fruit.</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="pro-div">
              <img src={todo} className="po-im" alt="To-Do-List" />
              <div className="layer">
                <h2>To-Do-List</h2>
                <p>I have created a To-Do-List game where the user can save his/her to-do works</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="pro-div">
              <img src={rock} className="po-im" alt="Rock-Paper-Scissor" />
              <div className="layer">
                <h2>Rock-Paper-Scissor Game</h2>
                <p>I have created a Rock-Paper-Scissor game which is interesting.</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="pro-div">
              <img src={utube} className="po-im" alt="YouTube" />
              <div className="layer">
                <h2>You-Tube</h2>
                <p>I have created a layout of YouTube which has all features of an original YouTube</p>
                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="servo">
        <div className="contain">
          <div className="row">
            <div className="left">
              <h1>Contact Me</h1>
              <p><i className="fa fa-paper-plane" style={{ color: 'rgb(254, 65, 97)' }}></i> vasantigoli2005@gmail.com</p>
              <p><i className="fas fa-phone-square-alt" style={{ color: 'rgb(254, 65, 97)' }}></i> 9951980767</p>
              <div className="apps">
                <a><i className="fab fa-twitter-square"></i></a>
                <a><i className="fab fa-instagram"></i></a>
                <a><i className="fab fa-whatsapp"></i></a>
                <a><i className="fab fa-linkedin"></i></a>
              </div>
              <a href="" download className="down">Download Resume</a>
            </div>
            <div className="right">
              <input type="text" className="text" placeholder="Your Name" required />
              <input type="email" className="mail" placeholder="Your Email" required />
              <textarea name="msg" id="mesg" className="tear" placeholder="Your Messages"></textarea>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <footer>copyrights &#169; Vasanti</footer>
    </div>
  );
}

export default App;
