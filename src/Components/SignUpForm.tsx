import iconList from "../assets/images/icon-list.svg";

type SignUpFormProps = {
  email: string;
  setEmail: (value: string) => void;
  showError: boolean;
  onSubmit: (e: React.FormEvent) => void;
};

export default function SignUpForm({
  email,
  setEmail,
  showError,
  onSubmit,
}: SignUpFormProps) {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[hsl(234,29%,20%)] mb-4">
        Stay updated!
      </h1>
      <p className="text-[hsl(0,0%,41%)] mb-6">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="flex flex-col gap-3 mb-8">
        {[
          "Product discovery and building what matters",
          "Measuring to ensure updates are a success",
          "And much more!",
        ].map((item) => (
          <li key={item} className="flex items-center gap-4">
            <img src={iconList} alt="" className="w-5 h-5 shrink-0" />
            <span className="text-[hsl(0,0%,41%)] text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} noValidate>
        <div className="flex items-center justify-between mb-1">
          <label
            htmlFor="email"
            className="text-sm font-bold text-[hsl(234,29%,20%)]"
          >
            Email address
          </label>
          {showError && (
            <span className="text-sm font-bold text-[hsl(4,100%,67%)]">
              Valid email required
            </span>
          )}
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
          className="w-full py-4 rounded-lg font-bold text-white bg-[hsl(234,29%,20%)] hover:bg-linear-to-r hover:from-[hsl(4,100%,67%)] hover:to-[hsl(346,100%,66%)] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)]/30 transition-all"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}