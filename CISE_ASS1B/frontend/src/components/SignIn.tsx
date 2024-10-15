import React from 'react';
import Link from 'next/link';
import './CSS/SignIn.css';

function SignIn() {
  return (
    <div className="content-container">
    <div className="logo-container">
      <h1 className="title">SPEED</h1>
      <p className="smalltext">SOFTWARE PRACTICE EMPIRACAL EVIDENCE DATABASE</p>
        </div>

    <div className='SignIn'>
      <div className='SignIn-box'>
        <h1>Select User Type</h1>
        <Link href='/Home' className='User'>
          User
        </Link>
        <Link href='/Moderator-home' className='Moderator'>
          Moderator
        </Link>
      </div>
    </div>
    </div>
  );
}

export default SignIn;
