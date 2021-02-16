import React from 'react';

export default function ContactForm() {
  return (
    <div className='contactForm__container'>
      <h2 className='contactForm__title'>Contact Me</h2>
      <form
        className='contactForm__form'
        name='contact'
        method='POST'
        netlify
        id='contact-form'
      >
        <label for='name' class='contactForm__label'>
          Name
        </label>
        <input
          name='name'
          class='contactForm__input'
          type='text'
          id='name'
          required
          placeholder='John Appleseed'
        />
        <label class='contactForm__label' for='email'>
          Email Address
        </label>
        <input
          class='contactForm__input'
          type='email'
          id='email'
          required
          name='email'
          placeholder='email@example.com'
        />
        <label class='contactForm__label' for='message'>
          Message
        </label>
        <textarea
          name='message'
          class='contactForm__input contactForm__textarea'
          required
          id='message'
          placeholder='Enter your message'
        ></textarea>
        <button
          class='btn btn--primary btn--contact-form'
          type='submit'
          value='Send message'
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}
