import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate

function SignUp({ onLogin }) {
    const navigate = useNavigate(); // Assign useNavigate to navigate
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", { username, email, password });

            if (response.data === "notexist") {
                // Pass username and email as user data
                onLogin({ username, email });
                navigate("/home"); // Use navigate for navigation
            } else if (response.data === "exist") {
                setErrorMessage("User already exists");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred while signing up");
        }
    }


    return (
        <div className='signup'>
            <div className='signup__inner'>
                <div className='signup__logo'></div>

                <div className='signup-content'>
                    <div className='signup__item'>
                        <h1 className='signup__subtitle title'>WELCOME TO SOILESAY</h1>
                        <p className='signup__text text'>Practice Kazakh Language skills through fun and interactive games!</p>
                    </div>

                    <div className='signup__item'>
                        <h2 className='signup__title title'>CREATE ACCOUNT</h2>

                        <form className='signup__form' onSubmit={submit}>
                            <input className='signup__input input'
                                type='text'
                                placeholder='Enter Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}></input>

                            <input className='signup__input input'
                                type='email'
                                placeholder='Enter email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></input>

                            <input className='signup__input input'
                                type='password'
                                placeholder='Create password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>

                            <input className='button-submit' type="submit" value="Sign Up" />

                            <br />

                            <p className='text'>OR</p>

                            <button className='button button-login'>
                                <Link className="link-login" to='/'>Login</Link>
                            </button>
                            
                        </form>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
