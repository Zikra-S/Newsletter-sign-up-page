import { useState } from "react";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationTablet from "./assets/images/illustration-sign-up-tablet.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import iconSuccess from "./assets/images/icon-success.svg";
import iconList from "./assets/images/icon-list.svg";

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
    setEmail("");
    setSubmitted(false);
  }

  const showError = submitted && !isValidEmail;

  return (
    <div className="min-h-screen bg-[hsl(234,29%,20%)] flex items-center justify-center p-0 sm:p-6">
      <div
        className={`bg-white w-full min-h-screen sm:min-h-0 sm:rounded-3xl overflow-hidden flex flex-col-reverse sm:flex-row ${
          isSuccess ? "sm:max-w-md" : "sm:max-w-4xl"
        }`}>
        {/* Form / success */}
        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
          {isSuccess ? (
            <div className="min-h-screen sm:min-h-0 flex flex-col justify-between py-4 sm:py-0">
              <div>
                <img src={iconSuccess} alt="" className="w-14 h-14 mb-8" />
                <h1 className="text-4xl font-extrabold text-[hsl(234,29%,20%)] mb-4">Thanks for subscribing!</h1>
                <p className="text-[hsl(0,0%,41%)] mb-8">
                  A confirmation email has been sent to <strong className="text-[hsl(234,29%,20%)]">{email}</strong>. Please open it and click the
                  button inside to confirm your subscription.
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="w-full py-4 rounded-lg font-bold text-white bg-[hsl(234,29%,20%)] hover:bg-linear-to-r hover:from-[hsl(4,100%,67%)] hover:to-[hsl(346,100%,66%)] transition-all">
                Dismiss message
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[hsl(234,29%,20%)] mb-4">Stay updated!</h1>
              <p className="text-[hsl(0,0%,41%)] mb-6">Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <img src={iconList} alt="" className="w-5 h-5 shrink-0" />
                    <span className="text-[hsl(0,0%,41%)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="email" className="text-sm font-bold text-[hsl(234,29%,20%)]">
                    Email address
                  </label>
                  {showError && <span className="text-sm font-bold text-[hsl(4,100%,67%)]">Valid email required</span>}
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-5 py-3 mb-5 rounded-lg border outline-none text-[hsl(234,29%,20%)] placeholder:text-[hsl(0,0%,60%)] ${
                    showError
                      ? "border-[hsl(4,100%,67%)] bg-[hsl(4,100%,97%)] placeholder:text-[hsl(4,100%,67%)]"
                      : "border-[hsl(0,0%,80%)] focus:border-[hsl(234,29%,20%)]"
                  }`}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold text-white bg-[hsl(234,29%,20%)] hover:bg-linear-to-r hover:from-[hsl(4,100%,67%)] hover:to-[hsl(346,100%,66%)] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)]/30 transition-all">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Illustration */}
        {!isSuccess && (
          <div className="sm:w-2/5 p-4 flex items-stretch">
            <picture className="w-full">
              <source media="(min-width: 640px)" srcSet={illustrationDesktop} />
              <source media="(min-width: 480px)" srcSet={illustrationTablet} />
              <img src={illustrationMobile} alt="" className="w-full h-full object-cover rounded-2xl" />
            </picture>
          </div>
        )}
      </div>
    </div>
  );
}
