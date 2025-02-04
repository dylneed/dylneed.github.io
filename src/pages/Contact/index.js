import './index.css';
import React, {useRef} from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mayrwany");
  const subjectRef = useRef(null); 
  const messageRef = useRef(null);

  if (state.succeeded) {
    subjectRef.current.value="";
    messageRef.current.value="";
  }

  return (
    <div id="contact">
      <h2>Contact</h2>
      <div id="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="Name" 
          name="Name"
        />
        <label htmlFor="email">
          Email Address
          <span> (Required)</span>
        </label>
        <input
          id="email"
          type="Email" 
          name="Email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="Email"
          errors={state.errors}
        />
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="Subject"
          ref={subjectRef}
        />
        <label htmlFor="message">
          Message
          <span> (Required)</span>
        </label>
        <textarea
          id="message"
          name="Message"
          ref={messageRef}
          required
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact;
