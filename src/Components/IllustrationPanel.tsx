import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationTablet from "../assets/images/illustration-sign-up-tablet.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

export default function IllustrationPanel() {
  return (
    <div className="sm:w-2/5 p-4 flex items-stretch">
      <picture className="w-full">
        <source media="(min-width: 640px)" srcSet={illustrationDesktop} />
        <source media="(min-width: 480px)" srcSet={illustrationTablet} />
        <img
          src={illustrationMobile}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </picture>
    </div>
  );
}