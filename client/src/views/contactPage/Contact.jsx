import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/header/Header';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import { BiCloudUpload } from 'react-icons/bi';
import './Contact.scss';

const Contact = () => {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [testimonials, setTestimonials] = useState([]);
  // Validation of the state variables
  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setLastNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [messageValidation, setMessageValidation] = useState(false);

  // useRef to store the email input
  const emailRef = useRef();
  const testimonialLength = useRef();

  // Function to check if the email is valid
  const checkEmailFormat = () => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    if (emailRegex) {
      emailRef.current.className = 'errorInvisible';
    } else {
      emailRef.current.className = 'errorVisible';
    }
  };

  //Function that validate message length
  const messageLength = () => {
    if (message.length === 50) {
      testimonialLength.current.className = 'errorInvisible';
    } else {
      testimonialLength.current.className = 'errorVisible';
    }
  };

  // Function that handle input change
  const handleChange = (event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        setFirstNameValidation(true);
        break;
      case 'lastName':
        setLastName(event.target.value);
        setLastNameValidation(true);
        break;
      case 'email':
        setEmail(event.target.value);
        setEmailValidation(true);
        break;
      case 'file':
        setFile(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        setMessageValidation(true);
        break;
      default:
        break;
    }
  };

  // Function to reset input data
  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setFile('');
    setMessage('');
    setFirstNameValidation(false);
    setLastNameValidation(false);
    setEmailValidation(false);
    setMessageValidation(false);
  };

  // Function to submit testimonial
  const submitTestimonial = async (event) => {
    event.preventDefault();

    const settings = {
      method: 'POST',
      body: new FormData(event.target), // formData, json data, graphql
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + '/api/testimonials',
      settings
    );
    const result = await response.json();

    try {
      if (response.ok) {
        setTestimonials([...testimonials, result.testimonial]);
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="contact-page">
      <Header pages="HotelsHotelAndContact" page="Conctact" />

      <section className="contact-container">
        <h1 className="title">We Would Love to Hear From You</h1>
        <div className='form-communication-tools'>
          <article className="form-container">
            <h3 className="sub-title"> Drop us a message below </h3>

            <form
              onSubmit={submitTestimonial}
              encType="multipart/form-data"
              className="contact-form"
            >
              <div className="user-data">
                <div className="input-container">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={firstName}
                    placeholder="First Name"
                    className="input-field"
                  />
                  <div
                    className={
                      firstNameValidation && firstName.trim().length === 0
                        ? 'errorVisible'
                        : 'errorInvisible'
                    }
                  >
                    First name is required!
                  </div>
                </div>

                <div className="input-container">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={lastName}
                    placeholder="Last Name"
                    className="input-field"
                  />

                  <div
                    className={
                      lastNameValidation && lastName.trim().length === 0
                        ? 'errorVisible'
                        : 'errorInvisible'
                    }
                  >
                    Last name is required!
                  </div>
                </div>

                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    onBlur={checkEmailFormat}
                    placeholder="Email"
                    className="input-field"
                  />
                  <div
                    className={
                      emailValidation && email.trim().length === 0
                        ? 'errorVisible'
                        : 'errorInvisible'
                    }
                  >
                    Email is required!
                  </div>
                  <div className="errorInvisible" ref={emailRef}>
                    Incorrect email format!
                  </div>
                </div>

                <div className="input-files-container">
                  <input
                    type="file"
                    name="file"
                    value={file}
                    onChange={handleChange}
                    className="input-file"
                  />
                  <button className="file-btn">
                    <BiCloudUpload className="icon" /> Upload
                    <small className="supported-files">
                      (PDF, JPG, & PNG)
                    </small>
                  </button>
                </div>
              </div>

              <div className="text-message">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleChange}
                  cols="58"
                  rows="6"
                  placeholder="We value your message"
                  className="input-field"
                />
                <div
                  className={
                    messageValidation && message.trim().length === 0
                      ? 'errorVisible'
                      : 'errorInvisible'
                  }
                >
                  Message is required!
                </div>
              </div>
              <button className="contact-form-btn">Submit</button>
            </form>
          </article>

          <article className="fast-contact-tools">
            <h5 className="sub-title"> Would you like a prompt reply? </h5>
            <div className="contact-tools">
              <FiPhoneCall className="contact-icon" />
              <p className='link-container'>
                <a className='link' href="tel:+4917581005650"> Call us </a>
              </p>
            </div>
            <div className="contact-tools">
              <MdEmail className="contact-icon" />
              <p className='link-container'>
                <a className='link' href="mailto:uelandrae@gmail.com"> Email Us </a>
              </p>
            </div>
            <div className="contact-tools">
              <FaTwitterSquare className="contact-icon" />
              <p className='link-container'>
                <a className='link' href="twitter"> Tweet us </a>
              </p>
            </div>
            <div className="contact-tools">
              <MdLocationOn className="contact-icon" />
              <p className='link-container'>
                <a className='link' href="#"> Straße 31, 4657 Hamburg, Germany</a>
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Contact;
