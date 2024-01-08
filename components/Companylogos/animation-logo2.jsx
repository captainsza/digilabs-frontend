import React from 'react';

const Animatelogo = () => {
    return(
<div className="bg-white w-[768px] flex flex-col items-center justify-center py-24 px-8 box-border">
        <div className="w-[704px] flex flex-col items-center justify-center py-0 px-8 box-border">
          <div className="w-[640px] flex flex-col items-center justify-center">
            <div className="w-[640px] flex flex-col items-center justify-start gap-[32px]">
              <div className="w-[640px] flex flex-row items-center justify-between">
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[98px] h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/Clip1.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[68px] h-6 object-cover"
                    alt=""
                    src="/images/Company.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="relative w-[124px] h-6">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/images/lottie.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[106px] h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/Clip2.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[98px] h-6 object-cover"
                    alt=""
                    src="/images/Clip3.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="relative w-[120px] h-6">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/images/Clip4.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[102px] h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/clip5.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <img
                    className="relative w-[132px] h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/clip6.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Animatelogo;