import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
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
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage(`Please enter a valid email address.`);
      // We want to exit out of this code block if something is wrong so that the user can correct it.
      return;
    }
    if (!userName) {
      setErrorMessage(`Please enter your name in the provided space.`);
    }
    if (!message) {
      setErrorMessage(`Please provide a message in the provided space.`);
    }
  }
  alert(`Hello ${userName}`);

  //clear out the input fields 
  setEmail("");
  setUserName("");
  setMessage("");
  setErrorMessage("");

  return (
    <div>
      <p>Hello, {userName}</p>
      <form className="form">
        <input
          value={email}
          type="email"
          name="email"
          placeholder='email'
          id='userInput'
          onChange={handleInputChange} />
        <input
          value={userName}
          type="text"
          name="userName"
          placeholder='name'
          id='userName'
          onChange={handleInputChange} />
        <textarea
          value={message}
          type="message"
          name="message"
          placeholder='message'
          id='userMessage'
          onChange={handleInputChange} />
        <button type="button" id='submit' onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="errorText">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};


export default Contact;