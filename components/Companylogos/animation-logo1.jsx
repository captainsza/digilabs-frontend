import React from 'react';

const Animatelogo = () => {
    return(
        <div className="bg-white w-[375px] flex flex-col items-center justify-center py-16 px-4 box-border">
        <div className="w-[343px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <div className="w-[343px] flex flex-row items-center justify-between" >
              <div className="flex flex-col items-center justify-center p-2" >
                <img
                  className="relative w-[65.33px] h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/images/Clip1.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <img
                  className="relative w-[45.33px] h-4 object-cover"
                  alt=""
                  src="/images/Company.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="relative w-[82.67px] h-4">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/images/lottie.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <img
                  className="relative w-[70.67px] h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/images/Clip2.png"
                />
              </div>
            </div>
            <div className="w-[343px] flex flex-row items-center justify-between">
              <div className="flex flex-col items-center justify-center p-2">
                <img
                  className="relative w-16 h-4 object-cover"
                  alt=""
                  src="/images/Clip3.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="relative w-20 h-4">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/images/Clip4.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <img
                  className="relative w-[68px] h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/images/clip5.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <img
                  className="relative w-[88px] h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/images/clip6.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Animatelogo;