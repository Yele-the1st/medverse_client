import {
  CheckIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import useInput from "../hooks/useInput";
import { emailValidation, passwordValidation } from "../validation/validation";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";

interface SignInModalProps {}

const SignInModal: FC<SignInModalProps> = ({}) => {
  const [visible, setVisible] = useState(false);
  //   const dispatch = useDispatch();
  const {
    value: email,
    isValid: enteredEmailIsValid,
    hasError: emialInputHasError,
    valueChangeHandler: emailChangeHandler,
    errorMessage: emailError,
    isTouched: emailTouched,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  const {
    value: password,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    errorMessage: passwordError,
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid && password) {
    formIsValid = true;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // if (!formIsValid) {
    //   return; // Prevent form submission if formIsValid is false
    // }
    // resetEmailInput();
    // resetPasswordInput();
    // navigate("/");
    // dispatch(loginUser({ email: email, password: password }));
  };

  const [agreed, setAgreed] = useState(false);

  const handleSwitchChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="fixed z-[816] sm:overflow-y-auto md:p-10 bg-[rgb(0,0,0,0.5)] w-full h-full  inset-0 overflow-x-hidden ">
      <div className=" my-0 relative h-full w-full transition-all ease-in-out duration-300   ">
        <div className=" absolute m-auto md:flex inset-0 md:rounded-[16px] md:max-w-[716px] md:max-h-[500px] bg-white overflow-y-scroll md:overflow-visible h-full w-full shadow-md ">
          <div
            className={`absolute right-1 flex top-2 z-[800] justify-end items-center w-full`}
          >
            <button
              type="button"
              className=" bg-primary md:hover:bg-[#EEF9F0] mr-1 p-2 relative flex justify-between items-center text-center md:bg-transparent rounded-[8px]  transition-all ease-in-out duration-300   "
            >
              <div className=" align-middle h-full w-full flex justify-center items-center">
                <div className=" flex items-center h-full w-full justify-center">
                  <svg
                    className=" fill-black w-5 h-5 shrink-0 align-middle "
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M17.656 6.333a.9.9 0 0 1 0 1.273l-4.046 4.052a.48.48 0 0 0 0 .678l4.047 4.053a.9.9 0 0 1 .08 1.18l-.081.092a.9.9 0 0 1-1.273 0l-4.044-4.05a.48.48 0 0 0-.68 0l-4.042 4.05a.9.9 0 1 1-1.274-1.273l4.047-4.052a.48.48 0 0 0 0-.678L6.343 7.606a.9.9 0 0 1-.08-1.18l.081-.093a.9.9 0 0 1 1.273.001l4.043 4.049a.48.48 0 0 0 .679 0l4.044-4.049a.9.9 0 0 1 1.273 0Z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className=" bg-[url(/assets/loginM2.png)] w-full h-[270px] md:bg-[url(/assets/loginM.png)] md:rounded-l-[16px] md:h-[500px] md:w-[284px] bg-cover bg-center"></div>

          <div className=" pt-[80px] pb-[20px] px-5  md:p-[30px]">
            <h2 className=" text-center text-[25px] italic font-extrabold text-gray-900 font-Poppins">
              Welcome back to Medverse executive!
            </h2>
            <p className=" text-xs mt-1 font- text-center">
              It sure is great to see you again
            </p>
            <button
              type="button"
              className=" mt-3 bg-[#EEF9F0] hover:bg-[#cbedd0] relative h-[44px] flex justify-center items-center text-center max-w-full transition-colors ease-in-out duration-500 hover:bg- px-4 rounded-full w-full cursor-pointer"
            >
              <div className=" flex items-center justify-center mr-2 ">
                <FcGoogle className=" w-5 h-5 shrink-0 align-middle" />
                <span className=" text-sm ml-2 font-Poppins ">
                  Log in with Google
                </span>
              </div>
            </button>

            <div className="my-2">
              <p className=" text-center">or</p>
            </div>

            <div className=" ">
              <form className=" space-y-3" onSubmit={handleSubmit}>
                <div className=" flex flex-col relative w-full   ">
                  <div
                    className={` flex flex-row items-center border  overflow-hidden h-[44px] rounded-[16px] px-5  transition-colors delay-0, transition-border duration-200 ease-linear delay-0 ${
                      !emialInputHasError
                        ? emailTouched && email
                          ? "border-[green] bg-indigo-50 "
                          : "border-[#B5B6BB] focus-within:border-black"
                        : "border-[#FEABAB] bg-[#FFEEEE]"
                    }  `}
                  >
                    <div className=" flex-1 flex flex-row items-center ">
                      <BsFillEnvelopeFill className="w-5 h-5 mr-2" />
                      <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={emailChangeHandler}
                        className=" outline-none font-light font-Ubuntu tracking-wider h-full w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                      />
                      {emialInputHasError && (
                        <ExclamationTriangleIcon className="w-6 h-6 stroke-1  stroke-[red]" />
                      )}
                      {!emialInputHasError && email && (
                        <CheckIcon className="w-6 h-6 stroke-2  stroke-[green]" />
                      )}
                    </div>
                  </div>
                  {emialInputHasError && (
                    <p className=" font-Ubuntu text-red-500 mt-1 text-xs">
                      {emailError}
                    </p>
                  )}
                </div>
                {email && !emialInputHasError && (
                  <div className=" flex flex-col relative w-full   ">
                    <div
                      className={` flex flex-row items-center border   overflow-hidden h-[44px] rounded-[16px] px-5  transition-colors delay-0, transition-border duration-200 ease-linear delay-0 ${
                        !passwordHasError
                          ? "border-[#B5B6BB] focus-within:border-black"
                          : "border-[#FEABAB] bg-[#FFEEEE]"
                      } `}
                    >
                      <div className=" flex-1 flex flex-row items-center ">
                        <BiSolidLockAlt className="w-5 h-5 mr-2" />
                        <input
                          name="password"
                          placeholder="Password"
                          type={visible ? "text" : "password"}
                          value={password}
                          onChange={passwordChangeHandler}
                          className=" outline-none font-light font-Ubuntu h-full w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                        />
                        {!visible ? (
                          <EyeIcon
                            onClick={() => setVisible(true)}
                            className="w-6 h-6 stroke-1 "
                          />
                        ) : (
                          <EyeSlashIcon
                            onClick={() => setVisible(false)}
                            className="w-6 h-6 stroke-1 "
                          />
                        )}
                      </div>
                    </div>
                    {passwordHasError && (
                      <p className=" font-Ubuntu text-red-500 mt-1 mb-3 text-xs">
                        {passwordError}
                      </p>
                    )}
                  </div>
                )}
                {email && !emialInputHasError && (
                  <div className="flex text-sm justify-between">
                    <div className="flex gap-x-2 items-center">
                      <div className="flex h-6 items-center">
                        <label
                          className={`flex w-8 flex-none items-end cursor-pointer rounded-full p-px ring-1 ring-inset ${
                            agreed
                              ? " bg-primary ring-primary"
                              : "bg-gray-200 ring-gray-900/5"
                          } transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tramangoOrange`}
                        >
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={handleSwitchChange}
                            className="sr-only"
                          />
                          <span
                            aria-hidden="true"
                            className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                              agreed ? "translate-x-3.5 " : "translate-x-0 "
                            }`}
                          />
                        </label>
                      </div>
                      <div className="text-sm leading-6 text-gray-900">
                        Remember me
                      </div>
                    </div>
                    <Link
                      href="/"
                      className="font-normal text-sm font-Ubuntu text-primary hover:text-[#42944d]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                <footer>
                  <button
                    disabled={!enteredEmailIsValid || !enteredPasswordIsValid}
                    type="submit"
                    className={` relative flex items-center justify-center flex-row border border-transparent transition-all duration-150 ease-linear delay-0 text-white h-[44px] px-5 rounded-[16px] w-full min-w-max  ${
                      !enteredEmailIsValid || !enteredPasswordIsValid
                        ? " bg-[#0A0B1E12] cursor-not-allowed"
                        : " bg-primary hover:bg-[#42944d]"
                    }`}
                  >
                    <span className=" tracking-wide text-base font-Ubuntu font-medium ">
                      Login
                    </span>
                  </button>
                </footer>
                <div className=" flex tracking-wide flex-row items-center justify-center ">
                  <div className=" text-sm font-Ubuntu mr-2 ">
                    Dont have an account yet?
                  </div>
                  <span className="text-sm tracking-wide text-primary underline font-Poppins">
                    <Link href={`/auth/signup`}>Sign up</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
