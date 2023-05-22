import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import Navbar from '../Navbar';
import '../css/signup_User.css';

export default function Signup_user() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [countryError, setCountryError] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('user_data');
    if (auth) {
      navigate('/Signup_user');
    }
  });

  function validatePassword(password) {
    // Minimum 8 characters, at least one capital letter, and at least one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError(
        'Password must have a minimum of 8 characters with at least one capital letter and one number.'
      );
    } else {
      setPasswordError('');
    }
  }

  function validateName(name) {
    // Only characters are allowed (no numbers or special characters)
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  }

  function validatePhone(phone) {
    // Only numbers (no characters or special characters)
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  }

  function handleFnameChange(e) {
    const newFname = e.target.value;
    setFname(newFname);

    if (!validateName(newFname)) {
      setFnameError('Please enter only characters.');
    } else {
      setFnameError('');
    }
  }

  function handleLnameChange(e) {
    const newLname = e.target.value;
    setLname(newLname);

    if (!validateName(newLname)) {
      setLnameError('Please enter only characters.');
    } else {
      setLnameError('');
    }
  }

  function handlePhoneChange(e) {
    const newPhone = e.target.value;
    setPhone(newPhone);

    if (!validatePhone(newPhone)) {
      setPhoneError('Please enter only numbers.');
    } else {
      setPhoneError('');
    }
  }

  function handleCountryChange(e) {
    const newCountry = e.target.value;
    setCountry(newCountry);

    if (!validateName(newCountry)) {
      setCountryError('Please enter only characters.');
    } else {
      setCountryError('');
    }
  }

  async function Submit(e) {
    e.preventDefault();
    if (!validateName(fname)) {
      setFnameError('Please enter only characters.');
      return;
    }

    if (!validateName(lname)) {
      setLnameError('Please enter only characters.');
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError('Please enter only numbers.');
      return;
    }

    if (!validateName(country)) {
      setCountryError('Please enter only characters.');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must have a minimum of 8 characters with at least one capital letter and one number.'
      );
      return;
    }
    try {
      const res = await axios.post('http://localhost:4000/Signup_user', {
        email,
        password,
        fname,
        lname,
        phone,
        country,
      });

      if (res.data === 'exist') {
        alert('User already exists');
      } else {
        
        localStorage.setItem('user_data', JSON.stringify(res.data));
        navigate('/User_package', { state: { id: email } });
      }
    } catch (e) {
      alert('Wrong details');
      console.log(e);
    }
  }

  const div1 = {
    border: '1px solid black',
    boxShadow: '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
    width: '50%',
    marginLeft: '50px',
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="bgimg">
        <center>
          <div style={div1} className="login-container">
            <br />
            <br />
            <form onSubmit={Submit}>
              <center>
                <div className="in">
                  <div className="form-group">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="email"
                        onChange={(e) => {setEmail(e.target.value);console.log(email)}}
                        placeholder="Enter email"
                        name="email"
                        required
                      />

                    </div>
                  </div>

                  <div className="form-group grp1">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                        name="password"
                        required
                      />
                    </div>
                    {passwordError && (
                      <small style={{ color: 'red' }}>{passwordError}</small>
                    )}
                  </div>

                  <div className="form-group grp1">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        onChange={handleFnameChange}
                        placeholder="Firstname"
                        name="fname"
                        required
                        style={{ width: '500px', height: '40px' }}
                      />
                    </div>
                    {fnameError && (
                      <small style={{ color: 'red' }}>{fnameError}</small>
                    )}
                  </div>

                  <div className="form-group grp1">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        onChange={handleLnameChange}
                        placeholder="Lastname"
                        name="lname"
                        required
                        style={{ width: '500px', height: '40px' }}
                      />
                    </div>
                    {lnameError && (
                      <small style={{ color: 'red' }}>{lnameError}</small>
                    )}
                  </div>

                  <div className="form-group grp1">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="tel"
                        onChange={handlePhoneChange}
                        placeholder="Enter your phone number"
                        name="phone"
                        required
                        style={{ width: '500px', height: '40px' }}
                      />
                    </div>
                    {phoneError && (
                      <small style={{ color: 'red' }}>{phoneError}</small>
                    )}
                  </div>

                  <div className="form-group grp1">
                    <div className="input-container">
                      <i className="fa fa-user icon"></i>
                      <input
                        className="input-field"
                        type="text"
                        onChange={handleCountryChange}
                        placeholder="Country"
                        name="country"
                        required
                        style={{ width: '500px', height: '40px' }}
                      />
                    </div>
                    {countryError && (
                      <small style={{ color: 'red' }}>{countryError}</small>
                    )}
                  </div>

                  <div className="form-group grp1">
                    <button type="submit" className="btn btn-lg but1">
                      Submit
                    </button>
                  </div>
                </div>
              </center>
            </form>
            or <Link to="/Login_user">Login</Link>
          </div>
          <br />
          <br />
        </center>
      </div>
    </div>
  );
}
