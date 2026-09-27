import iconSuccess from "../assets/images/icon-success.svg";

type SuccessMessageProps = {
  email: string;
  onDismiss: () => void;
};

export default function SuccessMessage({
  email,
  onDismiss,
}: SuccessMessageProps) {
  return (
    <div className="min-h-screen sm:min-h-0 flex flex-col justify-between py-4 sm:py-0">
      <div>
        <img src={iconSuccess} alt="" className="w-14 h-14 mb-8" />
        <h1 className="text-4xl font-extrabold text-[hsl(234,29%,20%)] mb-4">
          Thanks for subscribing!
        </h1>
        <p className="text-[hsl(0,0%,41%)] mb-8">
          A confirmation email has been sent to{" "}
          <strong className="text-[hsl(234,29%,20%)]">{email}</strong>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button
        onClick={onDismiss}
        className="w-full py-4 rounded-lg font-bold text-white bg-[hsl(234,29%,20%)] hover:bg-linear-to-r hover:from-[hsl(4,100%,67%)] hover:to-[hsl(346,100%,66%)] transition-all"
      >
        Dismiss message
      </button>
    </div>
  );
}