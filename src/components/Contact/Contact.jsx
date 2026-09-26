import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setContactSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Questions, recommendations, bookish things</p>
        <h2 id="contact-title">Let’s talk<br /><em>good books.</em></h2>
        <p>Looking for a recommendation or have a question about a title? Leave us a note.</p>
        <p className="contact-notice">This demo form is not connected to a mailbox yet, so messages will not be sent.</p>
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        onChange={() => setContactSubmitted(false)}
      >
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Your message
          <textarea name="message" rows="4" required />
        </label>
        <div className="contact-submit-row">
          <button className="send-button" type="submit">Prepare message <span aria-hidden="true">↗</span></button>
          {contactSubmitted && <p className="form-feedback" role="status">Form checked. Connect a mailbox to send your message.</p>}
        </div>
      </form>
    </section>
  )
}