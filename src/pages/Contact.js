import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { validateEmail } from '../utils/helpers';


function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
      console.log(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
      console.log(inputValue);
    } else {
      setMessage(inputValue);
      console.log(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      // We want to exit out of this code block if something is wrong so that the user can correct it.
      return;
    }
    if (!name) {
      setErrorMessage("Please enter your name in the provided space.");
    }
    if (!message) {
      setErrorMessage("Please provide a message in the provided space.");
    }

    //clear out the input fields 
    setEmail("");
    setName("");
    setMessage("");
    // setErrorMessage("");
  }
 
  // const sendEmail = (e) => {
  //   emailjs.send('')
  // }

  return (
    <div className="form container">
      <h3>Contact Me</h3>
      <form >
        
        <input
            value={email}
            type="email"
            name="email"
            placeholder='email'
            id='userInput'
            onChange={handleInputChange}
          />
          <input
            value={name}
            type="text"
            name="name"
            placeholder='name'
            id='name'
            onChange={handleInputChange}
          />
          <textarea
            value={message}
            type="message"
            name="message"
            placeholder='message'
            id='message'
            onChange={handleInputChange}
          />
        <button type="button" id='submit' onClick={handleFormSubmit}>Submit</button>
        {errorMessage && (
          <div>
            <p className="errorText">{errorMessage}</p>
          </div>
        )}
      </form>
      

    </div>
  );
};


export default Contact;