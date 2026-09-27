import { useState } from "react";
import SignUpForm from "./Components/SignUpForm";
import SuccessMessage from "./Components/SuccessMessage";
import IllustrationPanel from "./Components/IllustrationPanel";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showError = submitted && !isValidEmail;

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

  return (
    <div className="min-h-screen bg-[hsl(234,29%,20%)] flex items-center justify-center p-0 sm:p-6">
      <div
        className={`bg-white w-full min-h-screen sm:min-h-0 sm:rounded-3xl overflow-hidden flex flex-col-reverse sm:flex-row ${
          isSuccess ? "sm:max-w-md" : "sm:max-w-4xl"
        }`}
      >
        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
          {isSuccess ? (
            <SuccessMessage email={email} onDismiss={handleDismiss} />
          ) : (
            <SignUpForm
              email={email}
              setEmail={setEmail}
              showError={showError}
              onSubmit={handleSubmit}
            />
          )}
        </div>

        {!isSuccess && <IllustrationPanel />}
      </div>
    </div>
  );
}