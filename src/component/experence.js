import React from 'react';
import linkedin from '../component/photo/linkedin.svg'
import twitter from '../component/photo/twitter.svg'
import call from "../component/photo/call.svg"
import email from "../component/photo/email.svg"
function Experience() {
    return (
      <div>
      <h2 style={{textAlign: "center", fontSize:"40px"}}> ABOUT ME</h2>
     <p  className="center"> I have some skills already such as junior front-end development <br/>with 
        proficiency in HTML, CSS, and JavaScript, <br/>also skilled with AGILE METHODOLOGY,<br/>
         DIGITAL MARKETING and CONTENT CREATION.<br/>I have been so passionate about learning new 
    tech-related skills <br/>ever since I was in high school.<br/>
         I love to allow myself to grow in the IT industry because I love it here. <br/>I am eager to learn</p>
         <h1> MY SKILLS </h1>
         <button> HTML</button>
         <button> CSS </button>
         <button> JAVASCRIPT </button>
         <button> REACTJS  </button>
         <button> DIGITAL MARKETING  </button>
         <button> SCRUM </button>
         <button> BOOTSTRAP </button>
         <button> WORDPRESS</button>
         <h3 style={{ fontSize:"25px"}}>Primebtyes Solutions(Ottawa Canada): 2021 – (present) </h3>
<h3>Job title: Web Developer and Scrum Master (remote)</h3>
<h3>Key Achievements</h3>
<ul>
	<li>Maintaining, optimizing, troubleshooting, and improving websites</li>
	<li>Individually increased the speed to get work done before deadlines.</li>
	<li> Developed several professional websites for all kinds of businesses </li>
    <li>Daily maintenance of code, debugging issues, and solving clients’ problems</li>
	<li>Used the agile method and processes to coach 4 product owners through complex problem-solving strategies</li>
	<li>Identifies 10+ complex impediments and assisted the team in identifying the path to deliver on their sprint commitment</li>
</ul> 
<h2> CONTACT ME </h2>
<p> contact me via </p>
<a href='https://www.linkedin.com/in/omobolagee/' ><img className='img' src={linkedin} alt='linkedin icon'></img></a>
      <a href='https://twitter.com/OmobolajiEsther'><img className='img' src={twitter} alt='twitter icon'></img></a>
      <a href='tel:+234 9025501024'><img className='img' src={call} alt='call icon'></img></a>
      <a href='mailto:omobolagee29@gmail.com'><img className='img' src={email} alt='mail icon'></img></a>
      </div>

    );
  }
  export default  Experience;