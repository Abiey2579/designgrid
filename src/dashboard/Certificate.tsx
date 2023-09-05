import "../assets/css/certificate.css";
const Certificate = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dgLightPurple">
      <div className="w-[800px] h-[600px] bg-dgDarkPurple p-1 text-gray-700 shadow m-auto">
        <div className="border-2 border-white p-8 h-full">
          <div className="border-2 border-white p-1 h-full">
            <div className="bg-white h-full">
              <div className="pt-10 text-center">
                <h2 className="text-5xl cursive text-gray-600">
                  Congratulations On Your Course Completion
                </h2>
              </div>

              <div>
                <div className="w-[433.33px] h-[200px] mt-[70px] m-auto">
                  <div className="border-b border-gray-400 mb-4 pb-1 text-center">
                    <span className="font-semibold text-xl sans text-gray-900">
                      Yahaya M. Bello
                    </span>
                  </div>

                  <div className="flex flex-col text-center mb-7">
                    <span className="cursive text-3xl leading-none text-gray-600">
                      has earned
                    </span>
                    <span className="font-bold sans text-gray-900">
                      Certificate of Completion
                    </span>
                  </div>

                  <div className="text-center mb-1">
                    <span className="text-3xl leading-none cursive text-gray-600">
                      while completing the training course entitled
                    </span>
                  </div>

                  <div className="border-b border-gray-400 mb-4 py-1 text-center">
                    <span className="font-semibold sans text-gray-900">
                      Web Development 101
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 justify-end items-end mt-[70px] px-10">
                  <div className="text-center">
                    <span className="border-b border-gray-400 block"></span>
                    <span className="font-semibold sans text-xs text-gray-600">
                      Instructor's Signature
                    </span>
                  </div>
                  <div></div>
                  <div className="text-center">
                    <span className="block text-xs font-bold sans text-gray-900 pb-3">
                      30<sup>th</sup> September, 2023
                    </span>
                    <span className="border-b border-gray-400 block"></span>
                    <span className="font-semibold sans text-xs text-gray-600">
                      Date Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
