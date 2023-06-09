import React, { useState } from "react";
import Logo from "./Logo";
import { Mysocials } from "./Header";
import Toastmessage, { notify } from "../utils/Toastmessage";
import { createEmailSubscription } from "../utils";
import { showWarning } from "../utils/Toastmessage";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const makeRequest = async () => {
    try {
      const response = await createEmailSubscription(email);
      if (response) {
        setEmail((prev) => "");
        notify(
          "Thank You For Subscribing" + "" + String.fromCodePoint(0x1f60a)
        );
        scrollToTop();
      }
    } catch (error) {
      showWarning("Try again Later");
      console.error(error); // Handle any errors
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    makeRequest();
    // Perform form submission logic here
  };

  const validateEmail = (email: string) => {
    // Add your email validation logic here
    // Return true if the email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="bg-dark py-8">
      <Toastmessage />
      <Logo />
      {/* newsletter form */}

      <div className="flex flex-col gap-3 pl-3 mt-5">
        <p className="text-light">Subscribe to My Newsletter</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
            className="outline-0 bg-white border-0 p-2 rounded-sm w-[250px]"
          />
          <div>
            <button
              type="submit"
              disabled={!isValidEmail}
              className={`border-2 tracking-wider border-off mt-3 text-off py-2 px-3 ${
                !isValidEmail && "opacity-10"
              }`}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      {/* socials */}
      <div className="w-full flex items-center justify-center mt-3">
        <Mysocials />
      </div>
      <div className="text-light w-full flex items-center justify-center">
        <p>Copyright &#169; {year} Dcryptgirl. All rights reserved.</p>
      </div>
      <div className="text-light w-full flex items-center justify-center mt-3">
        <p className="italic text-[12px]">
          Made by{" "}
          <a className="underline" href="https://geepy.vercel.app">
            Geepy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
