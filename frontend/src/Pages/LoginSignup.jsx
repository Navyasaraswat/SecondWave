import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('Login function executed', formData);
    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await res.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong during signup');
    }
  };

  const signup = async () => {
    console.log('Signup function executed', formData);
    try {
      const res = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await res.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong during signup');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === 'Sign up' && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type='text'
              placeholder='Your name here'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Valid email address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={() => (state === 'Login' ? login() : signup())}>
          Continue
        </button>

        <p className='loginsignuplogin'>
          {state === 'Sign up' ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setState('Login')}>Login here!</span>
            </>
          ) : (
            <>
              Want to create an account?{' '}
              <span onClick={() => setState('Sign up')}>Click here!</span>
            </>
          )}
        </p>

        <div className='loginsignup-agree'>
          <input type='checkbox' id='terms' />
          <p>
            By continuing I agree with the privacy policy and terms and
            conditions of the organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
