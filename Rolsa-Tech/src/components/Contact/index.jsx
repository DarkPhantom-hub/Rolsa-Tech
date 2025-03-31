import React, { useState } from 'react';
import "./Contact.css";
import { contacts } from '../../data';

const Contact = () => {
  // Step 1: Define state for form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    // Here you can handle the form submission logic, for example:
    //  - Send the form data to an API.
    //  - Send it as an email using a service like EmailJS, Formspree, etc.
    console.log(formData);
    alert('Message Sent!');
    // Reset form
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="column">
          {contacts.map((contact, index) => (
            <div className="contact__info" key={index}>
              <div className="icon__container">{contact.icon}</div>
              <div className="details">
                <p className="text__muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="column form__container">
          <div className="form__top">
            <h3 className="sub__title g__text">Keep In Touch</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta. Assumenda, dolor! Assumenda inventore odit vel deleniti nostrum officia natus animi. Suscipit sed vitae quis aut. Quia nemo recusandae iste.
            </p>
          </div>
          <div className="form__middle">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="control"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="control"
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="control"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="control"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Message"
                className="control"
              ></textarea>
              <div className="form__bottom">
                <button type="submit" className="btn btn__primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
