import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tx8z9dd",
        "template_70os36n",
        form.current,
        "PifFGPRf9ZWSgfYwE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>vicentebayugar@gmail.com</h5>
            <a
              href="mailto:vicentebayugar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+5492983553384</h5>
            <a
              href="https://wa.me/5492983553384"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_icon" />
            <h4>LinkedIn</h4>
            <h5>Vicente Bayúgar</h5>
            <a
              href="https://www.linkedin.com/in/vicente-bayugar/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
