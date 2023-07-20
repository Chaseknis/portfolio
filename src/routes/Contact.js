import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './styles/contact.css';
// import Footer from './Footer';

function Contact() {
  const [state, handleSubmit] = useForm('mzbwnvzb');
  if (state.succeeded) {
    return <p className="success_message">Thank you for your message!</p>;
  }
  return (
    <section id="contact">
      <div className="contact_container container">
        <h2>Get in touch</h2>

        <span className="subtitle">
          Contact me
        </span>

        <div className="contact_group">
          <div className="contact_content">
            <h3 className="contact_title">
              Talk to me!
            </h3>

            <div className="contact_info">
              <div className="contact_card">
                <i className="bx bx-mail-send contact_card_icon" />

                <h3 className="contact_card_title">Email</h3>

                <span className="contact_card_data">innocent36th@gmail.com</span>

                <a href="mailto:innocent36th@gmail.com" className="contact_button">
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button_icon" />
                </a>
              </div>

              <div className="contact_card">
                <i className="bx bxl-whatsapp contact_card_icon" />

                <h3 className="contact_card_title">WhatsApp</h3>

                <span className="contact_card_data">+250 788 933 063</span>

                <a href="https://api.whatsapp.com/send?phone=250788933063&text=Hello, more information!" className="contact_button">
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button_icon" />
                </a>
              </div>

              <div className="contact_card">
                <i className="bx bxl-messenger contact_card_icon" />

                <h3 className="contact_card_title">Messenger</h3>

                <span className="contact_card_data">user.fb123</span>

                <a href="https://m.me/crypticalcoder/" className="contact_button">
                  Write me
                  <i className="bx bx-right-arrow-alt contact_button_icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact_content">
            <h3 className="contact_title form_title">
              Tell me about your project
            </h3>

            <form onSubmit={handleSubmit} className="contact_form" id="form" action="https://formspree.io/f/mzbwnvzb" method="post">
              <div className="contact_form_wrapper">
                <input type="text" name="name" className="contact_form_input" id="name" placeholder="Full Name" required />
              </div>

              <div className="contact_form_wrapper">
                <input type="email" name="email" className="contact_form_input" id="email" placeholder="Enter your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="contact_form_wrapper contact_form_area">
                <textarea type="message" name="message" id="textarea" cols="30" rows="10" placeholder="Your message" className="contact_form_input" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="home_button" disabled={state.submitting}>
                Send Message
                <i className="uil uil-message" />
              </button>

            </form>

            <div className="submit_response error_hidden">
              Thank you for contacting me, I will get back to you ASAP.
            </div>
            <small id="alert_message" />
          </div>

        </div>

      </div>
      {/* <Footer /> */}
    </section>
  );
}

export default Contact;
