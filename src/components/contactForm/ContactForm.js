import React, {useContext, useState} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ContactForm.scss";

export default function ContactForm() {
  const {isDark} = useContext(StyleContext);
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);
  const accessKey = process.env.REACT_APP_ACCESS_KEY || process.env.access_key;

  const onSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!accessKey) {
      setResult("Contact form is not configured yet.");
      return;
    }

    setIsSending(true);
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className={isDark ? "contact-form contact-form-dark" : "contact-form"}
      onSubmit={onSubmit}
    >
      <div className="contact-form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="Your email" required />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" placeholder="Tell me about your project" required></textarea>
      </label>
      <div className="contact-form-actions">
        <button className="contact-form-button" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {result && <span className="contact-form-result">{result}</span>}
      </div>
    </form>
  );
}
