import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (isValidEmail) {
      setIsSuccess(true);
    }
  }
  function handleDismiss() {
    setIsSuccess(false);
  }

  return (
    <div>
      {isSuccess ? (
        <div>
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to {email}.</p>
          <button onClick={handleDismiss}>Dismiss message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {submitted && !isValidEmail && <p>Please enter a valid email</p>}
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      )}
    </div>
  );
}
