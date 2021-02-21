import React from 'react'
import { FaUser, FaEnvelope } from 'react-icons/fa';

const ContactForm = (props) => {

  return (
    <form id="contact-form" action="/contact-success" method="post" role="form" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="field">
        <label className="label">Name</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Ex. Jane Smith"
            name="Name"
            required
          />
          <span className="icon is-small is-left">
            <FaUser />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Ex. hello@maildomain.com"
            name="Email"
            required
          />
          <span className="icon is-small is-left">
            <FaEnvelope />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Textarea"
            name="Message"
            required
          ></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary is-fullwidth" type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
