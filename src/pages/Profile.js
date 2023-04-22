import { useCallback } from "react";

const Profile = () => {
  const onButtonsClick = useCallback(() => {
    // Please sync "Business Profile" to the project
  }, []);

  const onButtons1Click = useCallback(() => {
    // Please sync "Business Profile" to the project
  }, []);

  return (
    <main className="relative bg-whitesmoke w-full h-[960px] overflow-hidden text-left text-xs text-black-4 font-input-placeholder">
      <input
        className="[border:none] font-roboto text-base bg-white absolute top-[22px] left-[301px] rounded w-[971px] overflow-hidden flex flex-row py-1.5 px-4 box-border items-center justify-start"
        type="text"
        placeholder="Search..."
      />
      <img
        className="absolute top-[10px] left-[1285px] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/notificationsfilled.svg"
      />
      <img
        className="absolute top-[10px] left-[1364px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/frame-1000002521@2x.png"
      />
      
      <nav className="absolute top-[114px] left-[152px] w-[1242px] flex flex-row items-center justify-between">
        <div className="w-[400px] shrink-0 flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-row p-2.5 items-center justify-center border-b-[4px] border-solid border-normal">
            <div className="relative text-6xl font-input-placeholder text-black-5 text-center">
              Account
            </div>
          </div>
          <button className="[border:none] p-2.5 bg-[transparent] flex-1 flex flex-row items-center justify-center">
            <div className="relative text-6xl font-input-placeholder text-darkgray text-center">
              Business
            </div>
          </button>
          <div className="[border:none] p-2.5 bg-[transparent] flex-1 flex flex-row items-center justify-center">
            <div className="relative text-6xl font-input-placeholder text-darkgray text-center">
              Plans
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[17px] px-4 bg-green rounded-xl w-[180px] shrink-0 flex flex-row box-border items-center justify-center"
          onClick={onButtons1Click}
        >
          <div className="flex-1 relative text-6xl font-input-placeholder text-white text-center">
            Next
          </div>
        </button>
      </nav>
      <div className="absolute top-[198px] left-[152px] w-[375px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
          <div className="relative">First Name</div>
        </div>
        <input
          className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
          type="text"
          placeholder="Usman*"
        />
      </div>
      <div className="absolute top-[289px] left-[152px] w-[375px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
          <div className="relative">Last Name</div>
        </div>
        <input
          className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
          type="text"
          placeholder="Ndako"
        />
      </div>
      <div className="absolute top-[380px] left-[152px] w-[375px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
          <div className="relative">Email</div>
        </div>
        <input
          className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
          type="text"
          placeholder="usmanndako@gmail.com*"
        />
      </div>
      <div className="absolute top-[463px] left-[152px] flex flex-col items-start justify-start">
        <div className="w-[375px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
            <div className="relative">OTP</div>
          </div>
          <input
            className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
            type="text"
            placeholder="123456"
          />
        </div>
      </div>
      <div className="absolute top-[546px] left-[152px] w-[375px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
            <div className="relative">Phone Number</div>
          </div>
          <div className="self-stretch h-[52px] shrink-0 flex flex-row items-start justify-start gap-[6px]">
            <select
              className="self-stretch rounded-lg bg-white w-[142px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start gap-[10px]"
              required
            >
              <option value="India">+91</option>
              <option value="USA">+10</option>
              <option value="China">+152</option>
              <option value="Pakistan">+72</option>
            </select>
            <input
              className="[border:none] font-input-placeholder text-base bg-white self-stretch flex-1 rounded-lg flex flex-col py-2 px-4 items-start justify-start"
              type="text"
              placeholder="1234567890*"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[724px] left-[152px] w-[375px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
          <div className="relative">Address</div>
        </div>
        <input
          className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
          type="text"
          placeholder="No. 93 Skyfield Apartments"
        />
      </div>
      <div className="absolute top-[811px] left-[152px] flex flex-col items-start justify-start">
        <div className="w-[375px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
            <div className="relative">Pin Code</div>
          </div>
          <input
            className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
            type="text"
            placeholder="560067*"
          />
        </div>
      </div>
      <div className="absolute top-[633px] left-[152px] flex flex-col items-start justify-start">
        <div className="w-[375px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row py-0 px-1 items-start justify-start">
            <div className="relative">OTP</div>
          </div>
          <input
            className="[border:none] font-input-placeholder text-base bg-white self-stretch rounded-lg h-[52px] shrink-0 flex flex-col py-2 px-4 box-border items-start justify-start"
            type="text"
            placeholder="123456"
          />
        </div>
      </div>
      <img
        className="absolute top-[198px] left-[604px] rounded-xl w-[172px] h-[167px] overflow-hidden"
        alt=""
        src="/upload-image.svg"
      />
      <div className="absolute top-[387px] left-[871px] w-[414px] h-[253px] text-base text-black">
        <div className="absolute top-[238px] left-[0px] text-xs text-black-4">
          For v2
        </div>
        <div className="absolute top-[0px] left-[0px] text-xs text-black-4">
          User Card
        </div>
        <div className="absolute top-[27px] left-[0px] rounded-6xl bg-linen box-border w-[414px] h-[200px] flex flex-row items-center justify-start text-lightgray border-[2px] border-solid border-green">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between">
            <div className="self-stretch relative hidden" />
          </div>
        </div>
        <div className="absolute top-[45px] left-[171px] text-6xl text-center flex items-center justify-center w-[168px]">
          Usman Kumar
        </div>
        <img
          className="absolute h-[5.7%] w-[3.49%] top-[70.86%] right-[64.08%] bottom-[23.43%] left-[32.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/stroke-3.svg"
        />
        <div className="absolute top-[178px] left-[171px] inline-block w-[111px]">
          ID- 28308
        </div>
        <img
          className="absolute h-[7.71%] w-[3.99%] top-[55.83%] right-[63.83%] bottom-[36.46%] left-[32.19%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/location.svg"
        />
        <div className="absolute top-[141px] left-[171px] inline-block w-[78px]">
          Bengaluru
        </div>
        <img
          className="absolute h-[7.71%] w-[5.19%] top-[39.23%] right-[63.35%] bottom-[53.06%] left-[31.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/message.svg"
        />
        <div className="absolute top-[94px] left-[171px] text-xl inline-block w-[236px]">
          usmanndako@gmail.com
        </div>
        <img
          className="absolute top-[45px] left-[124px] w-[35px] h-[35px]"
          alt=""
          src="/iconlylightprofile.svg"
        />
        <img
          className="absolute top-[67px] left-[14px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/bg-removed-tshirt-2@2x.png"
        />
        <img
          className="absolute h-[29.64%] w-[18.12%] top-[51.78%] right-[10.39%] bottom-[18.58%] left-[71.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute top-[414px] left-[871px] w-[414px] h-[200px] text-base text-black">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-linen box-border w-[414px] h-[200px] flex flex-row items-center justify-start text-lightgray border-[2px] border-solid border-green">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between">
            <div className="self-stretch relative hidden" />
          </div>
        </div>
        <div className="absolute top-[18px] left-[171px] text-6xl text-center flex items-center justify-center w-[168px]">
          Usman Kumar
        </div>
        <img
          className="absolute h-[7.21%] w-[3.49%] top-[76.14%] right-[64.08%] bottom-[16.64%] left-[32.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/stroke-3.svg"
        />
        <div className="absolute top-[151px] left-[171px] inline-block w-[111px]">
          ID- 28308
        </div>
        <img
          className="absolute h-[9.75%] w-[3.99%] top-[57.13%] right-[63.83%] bottom-[33.13%] left-[32.19%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/location.svg"
        />
        <div className="absolute top-[114px] left-[171px] inline-block w-[78px]">
          Bengaluru
        </div>
        <img
          className="absolute h-[9.75%] w-[5.19%] top-[36.13%] right-[63.35%] bottom-[54.13%] left-[31.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/message.svg"
        />
        <div className="absolute top-[67px] left-[171px] text-xl inline-block w-[236px]">
          usmanndako@gmail.com
        </div>
        <img
          className="absolute top-[18px] left-[124px] w-[35px] h-[35px]"
          alt=""
          src="/iconlylightprofile.svg"
        />
        <img
          className="absolute top-[40px] left-[14px] w-[100px] h-[100px] object-cover"
          alt=""
          src="/bg-removed-tshirt-2@2x.png"
        />
        <img
          className="absolute h-[37.5%] w-[18.12%] top-[52%] right-[10.39%] bottom-[10.5%] left-[71.5%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
    </main>
  );
};

export default Profile;
