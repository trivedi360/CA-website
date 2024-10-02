import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="01eac30d-6cce-452e-809a-b1ef444b259c" />

        <input type="Enter Your Name" placeholder="Your Name" className="input-field" required="required" />

        <input type="email" placeholder="Your Email" className="input-field" required="required" />

        <input type="tel" placeholder="Your Contact Number" className="input-field" />

        <textarea className="input-field textarea-field" placeholder="Your MESSAGE" name="message" required="required" />


        <button type="submit" className="submit-btn">Send Message</button>

      </form>

      <section>
        <h2>Our Office</h2>
        <p>N-110 Narayan-Das Nagar, Lalita Park, Laxmi-Nagar <br /> New Delhi Pin-110092</p>
        <p>Email: info@cawebsite.com</p>
        <p>Phone: +1234567890</p>
      </section>
    </div>

  );
};

export default ContactPage;
