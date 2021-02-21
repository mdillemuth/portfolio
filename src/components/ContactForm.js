import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm() {
  // Helper function to encode form for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <div id='contact' className='contactForm__container'>
      <h2>Contact Me</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...values }),
          })
            .then(() => {
              alert('Success');
              actions.resetForm();
            })
            .catch(() => {
              alert('Error');
            })
            .finally(() => actions.setSubmitting(false));
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = 'Field is required';
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = 'Field is required';
          }
          if (!values.message) {
            errors.message = 'Field is required';
          }

          return errors;
        }}
      >
        {() => (
          <Form name='contact' data-netlify={true}>
            <div className='contactForm__group'>
              <label className='contactForm__label' htmlFor='name'>
                Name
              </label>
              <Field
                placeholder='John Appleseed'
                name='name'
                className='contactForm__input'
              />
              <div className='contactForm__error'>
                <ErrorMessage name='name' />
              </div>
            </div>

            <div className='contactForm__group'>
              <label className='contactForm__label' htmlFor='email'>
                Email
              </label>
              <Field
                placeholder='example@email.com'
                name='email'
                className='contactForm__input'
              />
              <div className='contactForm__error'>
                <ErrorMessage name='email' />
              </div>
            </div>

            <div className='contactForm__group'>
              <label className='contactForm__label' htmlFor='message'>
                Message
              </label>
              <Field
                placeholder='How can I help?'
                name='message'
                component='textarea'
                className='contactForm__input contactForm__textarea'
              />
              <div className='contactForm__error'>
                <ErrorMessage name='message' />
              </div>
            </div>

            <button className='btn btn--primary' type='submit'>
              <span className='btn__span--primary'>SEND</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
