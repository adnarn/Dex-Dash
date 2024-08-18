import React, { useState } from 'react';
import "./LogReg.css"
import styles from './Logreg.module.css'
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const LogReg = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  }; 

  return (
    <div className='logregBox'>
      <div className={`form-box ${isLogin ? 'login-container' : 'hidden'}`} id="register">
        <h2>Login</h2>
        <form>
          <div className="input-wrapper">
            <FaUser className='myIcon' />
            <input type="email" placeholder="Email" className="input" id='username' />
            <div className="err"></div>
          </div>
          <div className="input-wrapper">
            <FaLock className='myIcon' />
            <input type="password" placeholder="Password" className="input" id='password'  />
            <div className="err"></div>
          </div>
          <Link to="/">
            <button type="submit" className="btn btn-primary">Login</button>
          </Link>
          <p className="loginLink">Don't have an account? <a href="#" onClick={toggleForm}>SignUp</a></p>
        </form>
      </div>

      <div className={`form-box ${isLogin ? 'hidden' : 'signUp-container'}`} id="login">
        <h2>SignUp</h2>
        <form>
          <div className="input-wrapper">
            <FaUser className='myIcon' />
            <input type="text" placeholder="Email" className="input" />
            
          </div>
          <div className="input-wrapper">
            <FaLock className='myIcon' />
            <input type="password" placeholder="Password" className="input" id='password' />
          </div>
          <div className="input-wrapper">
            <FaLock className='myIcon' />
            <input type="password" placeholder="Confirm Password" className="input" />

          </div>
          <Link to="/">
            <button type="submit" className="btn btn-primary">Submit</button>
          </Link>
          <p className="registerLink">Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default LogReg;
