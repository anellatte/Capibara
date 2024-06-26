import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcrypt';
import { useNavigate, Link } from 'react-router-dom';

function SignIn({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function submit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/", { email, password });
  
      if (response.data === "exist") {
        onLogin({ email });
        navigate("/home");
      } else if (response.data === "notexist") {
        setErrorMessage("User does not exist");
      } else if (response.data === "invalid") {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while signing in");
    }
  }

  return (
    <div className='signin'>
      <div className='signin__inner'>
        <div className='signup__logo'></div>

        <div className='signin-content'>
          <h1 className='signin__title title'>SIGN IN</h1>

          <form className='signin__form' onSubmit={submit}>
            <input className='signin__input input'
              type='email'
              placeholder='Enter email address'
              onChange={(e) => setEmail(e.target.value)}></input>

            <input className='signin__input input'
              type='password'
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}></input>

            <input className='button-submit' type="submit" value="Submit" />

            <br />

            <p className='text'>OR</p>

            <button className='button button-login'>
              <Link className="link-login" to='/signup'>Sign Up</Link>
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
