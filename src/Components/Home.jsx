import { useRef, useState, useEffect } from "react";
import { useTheme } from "../App";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import lightHome from "../assets/Backgrounds/lightHome.jpg";
import darkHome from "../assets/Backgrounds/darkHome.jpg";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const Home = ({ setCurrentPage }) => {
  const { theme } = useTheme();
  const mainPageTheme = theme === "light" ? "lightHome" : "darkHome";
  const [isPassword, setIsPassword] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const eyeRef = useRef(null);
  const inputRef = useRef(null);

  const TOGGLE_SPEED = 0.3;

  useGSAP(() => {
    const moveEye = (e) => {
      if (!eyeRef.current || !isEyeOpen) return;

      const bounds = eyeRef.current.getBoundingClientRect();
      const posMapper = gsap.utils.mapRange(-100, 100, 30, -30);

      gsap.to(".eye-pupil", {
        xPercent: gsap.utils.clamp(-30, 30, posMapper(bounds.x - e.clientX)),
        yPercent: gsap.utils.clamp(-30, 30, posMapper(bounds.y - e.clientY)),
        duration: 0.2,
      });
    };

    const resetEye = () => {
      gsap.to(".eye-pupil", {
        xPercent: 0,
        yPercent: 0,
        duration: 0.2,
      });
    };

    if (isEyeOpen) {
      window.addEventListener("mousemove", moveEye);
    } else {
      resetEye();
    }

    return () => {
      window.removeEventListener("mousemove", moveEye);
    };
  }, [isEyeOpen]);

  useEffect(() => {
    // Initial state: eye closed
    gsap.set(".eyelid", { scaleY: 1, transformOrigin: "center top" });
    gsap.set(".eye-pupil", { scaleY: 0.1, transformOrigin: "center center" });
  }, []);

  const toggleVisibility = () => {
    setIsPassword(!isPassword);
    setIsEyeOpen(!isEyeOpen);

    const duration = TOGGLE_SPEED;

    if (isPassword) {
      gsap.to(".eyelid", {
        scaleY: 0,
        transformOrigin: "center top",
        duration,
      });
      gsap.to(".eye-pupil", {
        scaleY: 1,
        transformOrigin: "center center",
        duration,
      });
      inputRef.current.type = "text";
    } else {
      gsap.to(".eyelid", {
        scaleY: 1,
        transformOrigin: "center top",
        duration,
      });
      gsap.to(".eye-pupil", {
        scaleY: 0.1,
        transformOrigin: "center center",
        duration,
      });
      // Reset eye position when closing
      gsap.to(".eye-pupil", {
        xPercent: 0,
        yPercent: 0,
        duration,
      });
      inputRef.current.type = "password";
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const navigateToFacebook = () => {
    window.location.href = "https://www.facebook.com";
  };

  const navigateToTwitter = () => {
    window.location.href = "https://www.x.com";
  };

  const scrollToInput = () => {
    if (inputRef.current) {
      const targetPosition = inputRef.current.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // duration in milliseconds
      let start = null;

      const smoothScroll = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * progressPercentage);
        if (progress < duration) {
          requestAnimationFrame(smoothScroll);
        } else {
          inputRef.current.focus();
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <section>
      <div
        className={`bg-contain bg-center h-screen flex flex-col justify-end ${
          mainPageTheme === "darkHome" ? "bg-customDark" : "bg-customBlue"
        }`}
        style={{
          backgroundImage: `url(${
            mainPageTheme === "lightHome" ? lightHome : darkHome
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className='absolute xs:bottom-10  bottom-32 w-full flex justify-center items-center' onClick={scrollToInput}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ffffff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#ffffff] mb-1'
              
            />
          </div>
      </div>

      <div
        className={`mb-10 ${
          mainPageTheme === "lightHome" ? "bg-customBlue" : "bg-customDark"
        }`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <section className="bg-gray-400 bg-opacity-70 p-10 md:p-20 rounded-2xl w-full max-w-md mx-auto">
        
        
          <div className="text-center md:text-left flex items-center justify-center md:justify-start">
            <label className="mr-2 text-black font-bold">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-500 border-blue-500 hover:bg-neutral-500 text-white shadow-[0_4px_9px_-4px_#e5e5e5]"
              onClick={navigateToFacebook}
            >
              <BiLogoFacebook
                size={24}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-black border-black text-white hover:bg-neutral-500 uppercase leading-normal shadow-[0_4px_9px_-4px_#e5e5e5]"
              onClick={navigateToTwitter}
            >
              <RiTwitterXFill
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
            <p className="mx-4 mb-0 text-center font-bold text-black">Or</p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold"
            type="text"
            placeholder="Email Address"
          />
          <div className="relative mt-4">
            <input
              ref={inputRef}
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded text-black font-bold pr-10 transition-all duration-300"
              type={isPassword ? "password" : "text"}
              placeholder="Password"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              onClick={toggleVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              aria-label="Toggle password visibility"
            >
              <svg
                ref={eyeRef}
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="eye-outline"
                  d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  className="eye-pupil"
                  cx="12"
                  cy="12"
                  r="3"
                  fill="currentColor"
                />
                <path
                  className="eyelid"
                  d="M2 12s3.63636-7 10-7 10 7 10 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4 flex justify-between font-bold text-sm">
            <label className="flex text-black hover:text-slate-700 cursor-pointer">
              <input className="ml-0.5 mr-1 font-bold" type="checkbox" />
              <span className="ml-1 mb-2">Remember Me</span>
            </label>
            <a
              className="text-black font-bold hover:text-neutral-700 hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <button
              className="mt-4 bg-gray-200 hover:bg-neutral-400 px-4 py-2 text-black font-bold uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={() => setCurrentPage("uploadPage")}
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-bold text-sm text-black text-center md:text-left">
            Don't have an account?{" "}
            <a className="text-red-600 hover:text-red-500" href="#">
              Register
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

Home.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Home;
