import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Mysocials } from "./Header";
import Toastmessage, { notify } from "../utils/Toastmessage";
import { checkEmailSubscription, createEmailSubscription } from "../utils";
import { showWarning } from "../utils/Toastmessage";
import axios from "axios";

const domain = import.meta.env.VITE_DOMAIN;

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
      const response = await axios.post(`${domain}/api/subscribe`, {
        email: email,
      });
      if (response.data == "You're already a subscriber") {
        setEmail((prev) => "");
        notify(
          "You're already a subscriber" + " " + String.fromCodePoint(0x1f60a)
        );
        scrollToTop();
      } else {
        setEmail((prev) => "");
        notify(
          "Thank You For Subscribing" + " " + String.fromCodePoint(0x1f60a)
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

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mx-4">
        <div className="flex w-full flex-col gap-3 pl-3 mt-5">
          <p className="text-light">Subscribe to My Newsletter</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
              className="outline-0 bg-white border-0 p-2 rounded-sm min-w-[200px] max-w-[250px]"
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
        <div className=" w-full mr-6">
          <p className="text-off text-center font-[500] mb-2">Quick links</p>
          <div className="flex flex-col text-center gap-1  text-white">
            <a href="/about">About Me</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
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
