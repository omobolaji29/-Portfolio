import React from 'react';
import linkedin from '../component/photo/linkedin.svg'
import twitter from '../component/photo/twitter.svg'
import call from "../component/photo/call.svg"
import email from "../component/photo/email.svg"
import pic from "../component/photo/picture.JPG"
function Information() {
    return (
      <div>
        <p> hi there, i'm </p>
        <h1 > OLADELE OMOBOLAJI ESTHER </h1>
        <h2>FRONT-END DEVELOPER </h2>
      <p> HTML ~ CSS ~ JAVASCPIRT ~ REACTJS</p>
      <p>A Top-notch Developer, Scrum Master and<br/> badass Digital Marketer & Content Creator</p>
      <a href='https://www.linkedin.com/in/omobolagee/' ><img className='img' src={linkedin} alt='linkedin icon'></img></a>
      <a href='https://twitter.com/OmobolajiEsther'><img className='img' src={twitter} alt='twitter icon'></img></a>
      <a href='tel:+234 9025501024'><img className='img' src={call} alt='call icon'></img></a>
      <a href='mailto:omobolagee29@gmail.com'><img className='img' src={email} alt='mail icon'></img></a>


      <img className="pic" src={pic} alt='my picture'></img>
      </div>

    );
  }
  export default Information;