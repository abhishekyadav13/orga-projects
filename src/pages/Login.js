import React from 'react'
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    const onButton1Click = useCallback(() => {
      navigate("/sign-up");
    }, [navigate]);
    const onSocialButtonClick = useCallback(() => {
        // Please sync "Sign Up" to the project
      }, []);
    
      const onRowClick = useCallback(() => {
        // Please sync "Sign Up" to the project
      }, []);
  return (
        <main className="relative w-full h-[960px] text-center text-[30px] text-grey-grey-900 font-poppins">
          <div className="absolute top-[0px]  bg-linen w-full h-[960px] overflow-hidden mx-auto items-center justify-center">
            <div className="absolute top-[150px] left-[842px] w-[360px] h-[562px]">
              <img
                className="absolute top-[0px] left-[156px] w-12 h-12"
                alt=""
                src="/logo.svg"
              />
              <div className="absolute top-[72px] left-[0px] w-[360px] flex flex-col items-start justify-start gap-[12px]">
                <strong className="self-stretch relative leading-[38px] font-semibold">
                  Login to Plants Board
                </strong>
                <h5 className="m-0 self-stretch relative text-base leading-[24px] font-normal font-inherit text-darkslategray">
                  Welcome back! Please enter your details.
                </h5>
              </div>
              <form className="absolute top-[178px] left-[0px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[360px] flex flex-col items-center justify-start gap-[24px]">
                <form className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                        <div className="relative text-sm leading-[20px] font-medium font-body-2-medium text-grey-grey-700 text-left">
                          Enter Email/Phone
                        </div>
                        <input
                          className="bg-white self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
                          type="text" placeholder='Enter your Email or Phone'
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                        <div className="relative text-sm leading-[20px] font-medium font-body-2-medium text-grey-grey-700 text-left">
                          Password/OTP
                        </div>
                        <input
                          className="bg-white self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
                          type="text" placeholder='.........'
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="self-stretch flex flex-row items-start justify-start gap-[64px] md:flex-row md:gap-[64px] md:items-start md:justify-start sm:flex-col sm:gap-[20px] sm:items-start sm:justify-start">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative rounded bg-white box-border w-4 h-4 shrink-0 overflow-hidden border-[1px] border-solid border-gray-300" />
                    </div>
                    <div className="relative text-sm leading-[20px] font-medium font-body-2-medium text-grey-grey-700 text-left">
                      Remember for 30 days
                    </div>
                  </div>
                  <a className="[text-decoration:none] self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative text-sm leading-[20px] font-medium font-body-2-medium text-primary-primary-600 text-left">
                        Forgot password
                      </div>
                    </div>
                  </a>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <button  onClick={onButton1Click} className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded flex flex-row items-start justify-start">
                    <div className="flex-1 rounded bg-primary-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center border-[1px] border-solid border-primary-primary-600">
                      <div className="flex-1 relative text-base leading-[24px] font-medium font-body-2-medium text-white text-center">
                        Sign in
                      </div>
                    </div>
                  </button>
                  <div className="self-stretch rounded flex flex-col items-center justify-center">
                    <button
                      className="cursor-pointer py-2.5 px-4 bg-white self-stretch rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[12px] border-[1px] border-solid border-gray-300"
                      onClick={onSocialButtonClick}
                    >
                      <img
                        className="relative w-6 h-6 shrink-0 overflow-hidden"
                        alt=""
                        src="/social-icon.svg"
                      />
                      <div className="relative text-base leading-[24px] font-medium font-body-2-medium text-grey-grey-800 text-left">
                        Sign in with Google
                      </div>
                    </button>
                  </div>
                </div>
              </form>
              <Link
            className="cursor-pointer [text-decoration:none] absolute top-[542px] left-[0px] w-[360px] flex flex-row items-start justify-center gap-[4px] text-left text-sm text-grey-grey-500 font-body-2-medium"
            to="/sign-up"
            onClick={onRowClick}
          >
            <p className="m-0 relative leading-[20px]">
              Don’t have an account?
            </p>
            <Link
              className="cursor-pointer [text-decoration:none] flex flex-row items-start justify-start text-primary-primary-600"
              to="/sign-up"
            >
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[20px] font-medium">
                  Sign up
                </div>
              </div>
            </Link>
          </Link>
              <img
                className="absolute top-[-10px] left-[154px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/plants-logoremovebg-1@2x.png"
              />
            </div>
            <img
              className="absolute top-[150px] left-[181px] w-[435px] h-[556px] object-cover"
              alt=""
              src="/logo-name-500x500-2@2x.png"
            />
          </div>
        </main>    
  )
}
export default Login