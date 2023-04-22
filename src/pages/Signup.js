import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const onButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <main className="relative bg-linen w-full h-[960px] overflow-hidden text-left text-sm text-grey-grey-700 font-text-md-medium">
      <div className="absolute top-[121px] left-[945px] w-[360px] flex flex-col items-center justify-start gap-[24px] text-center text-11xl text-gray-900 font-poppins">
        <img
          className="relative w-[50px] h-[50px] shrink-0 object-cover"
          alt=""
          src="/plants-logoremovebg-1@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[38px] font-semibold">
            Join Orga Plants
          </div>
          <div className="self-stretch relative text-base leading-[24px] font-text-md-medium text-grey-grey-500">
            Start your 30-day free trial.
          </div>
        </div>
      </div>
      <div className="absolute top-[299px] left-[945px] w-[360px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[20px] font-medium">
              Store Name*
            </div>
            <input
              className="font-text-md-medium text-base bg-white self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
              type="text"
              placeholder="Enter your store name"
              required
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[389px] left-[945px] w-[360px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[20px] font-medium">Email*</div>
            <input
              className="font-text-md-medium text-base bg-white self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[479px] left-[945px] w-[360px] flex flex-col items-start justify-start gap-[6px]">
        <div className="relative leading-[20px] font-medium">
          Phone Number *
        </div>
        <input
          className="font-text-md-medium text-base bg-white self-stretch rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
          type="text"
          placeholder="Enter your Phone Number"
          required
        />
      </div>
      <div className="absolute top-[569px] left-[945px] leading-[20px] font-medium">
        Password*
      </div>
      <input
        className="font-text-md-medium text-base bg-white absolute top-[595px] left-[945px] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[360px] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start border-[1px] border-solid border-gray-300"
        type="text"
        placeholder="Create a password"
        required
      />
      <div className="absolute top-[653px] left-[958px] leading-[20px] inline-block w-[347px] text-darkgray">
        <span>{`Password must be at least `}</span>
        <span className="text-coral-200">8 Characters</span>
        <span>{` and must contain at least a `}</span>
        <span className="text-coral-200">Capital Letter</span>
        <span>{`, a `}</span>
        <span className="text-coral-100">Number</span>
        <span>{` and a `}</span>
        <span className="text-coral-100">Special Character</span>
        <span>.</span>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[698px] left-[945px] rounded-lg w-[360px] flex flex-row items-start justify-start"
        onClick={onButtonClick}
      >
        <div className="flex-1 rounded bg-primary-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center border-[1px] border-solid border-primary-primary-600">
          <div className="relative text-base leading-[24px] font-medium font-text-md-medium text-white text-left">
            Get started
          </div>
        </div>
      </button>
      <div className="absolute top-[752px] left-[945px] w-[360px] flex flex-row items-start justify-center gap-[4px] text-grey-grey-500">
        <div className="relative leading-[20px]">Already have an account?</div>
        <div className="flex flex-row items-start justify-start text-primary-primary-700">
          <Link
            className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center text-[inherit]"
            to="/login"
          >
            <div className="relative leading-[20px] font-medium">Log in</div>
          </Link>
        </div>
      </div>
      <button className="cursor-pointer py-2.5 px-4 bg-white absolute top-[792px] left-[945px] rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[360px] overflow-hidden flex flex-row items-center justify-center gap-[12px] border-[1px] border-solid border-gray-300">
        <img
          className="relative w-6 h-6 shrink-0 overflow-hidden"
          alt=""
          src="/social-icon.svg"
        />
        <div className="relative text-base leading-[24px] font-medium font-text-md-medium text-grey-grey-700 text-left">
          Sign up with Google
        </div>
      </button>
      <img
        className="absolute top-[171px] left-[128px] w-[681px] h-[591px] object-cover"
        alt=""
        src="/bg-removed-tshirt-1@2x.png"
      />
    </main>
  );
};

export default SignUp;
