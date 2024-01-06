import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';

const Desktop = () => {
  
const sparkleColors = ['purple', 'black'];

const variants = {
  animate: {
    borderColor: sparkleColors,
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  }
};
  const words = ["Unleashing","the Next","Generation", "of Card", "Solutions"];

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-center text-base text-neutral-50 font-h300-32-medium">
      <div className="bg-white box-border w-[1440px] flex flex-col items-center justify-center p-2 text-xs text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="w-[1216px] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center gap-[16px]">
          <motion.div
            className="rounded-221xl bg-neutral-1300 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-neutral-1000"
            variants={variants}
            initial="animate"
            animate="animate"
          >
            <div className="relative leading-[16px] font-medium">
              Announcement
            </div>
          </motion.div>
            <div className="relative text-sm leading-[20px] font-medium text-neutral-50">
              We are happy to announce that we raise $2 Million in Seed Funding
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-5 px-20 text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="flex flex-col items-center justify-center py-0 px-8">
          <div className="w-[1216px] flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-center p-2">
              <div className="flex flex-col items-start justify-start py-1 px-2">
                <img
                  className="relative w-[84px] h-4 object-cover"
                  alt=""
                  src="/images/Vector.jpg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Card access
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#363C46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    Banking
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    Processing
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    About
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    Carrier
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-2">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[20px] font-medium">
                    Contact
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center text-neutral-400">
              <div className="flex flex-row items-center justify-center">
                <div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Login
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5" stroke="#5A6475" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[1440px] h-[532px] text-pri-purple-400 font-h50-16-bold">
        <img
          className="absolute h-[86.47%] w-[43.82%] top-[8.27%] right-[28.13%] bottom-[5.26%] left-[28.06%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/images/Mesh.png"
        />
        <div className="absolute h-[113.53%] w-full top-[-6.77%] right-[0%] bottom-[-6.77%] left-[0%] flex flex-col items-center justify-center pt-32 px-20 pb-8 box-border">
          <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border">
            <div className="w-[1216px] flex flex-col items-center justify-center">
              <div className="w-[832px] flex flex-col items-start justify-start gap-[32px]">
                <div className="w-[832px] flex flex-col items-center justify-start gap-[16px]">
                  <div className="relative leading-[20px] font-medium inline-block w-[832px]">
                    Seamless experience
                  </div>
                  <div className="w-[832px] flex flex-col items-center justify-start gap-[16px] text-43xl text-neutral-50 font-h300-32-medium">
                  <div className="self-stretch leading-[72px] font-semibold">
                        <ReactTypingEffect
                          text={words}
                          speed={300}
                          eraseSpeed={50}
                          typingDelay={100}
                          eraseDelay={50}
                          cursorRenderer={cursor => <h1>{cursor}</h1>}
                          cursorClassName='cursorSize'
                          displayTextRenderer={(text, i) => {
                            return (
                              <h1>
                                {text.split('').map((char, i) => {
                                  const key = `${i}`;
                                  return (
                                    <span
                                      key={key}
                                      style={{ color: i%2 === 0 ? 'neutral' : 'purple'}}
                                    >{char}</span>
                                  );
                                })}
                              </h1>
                            );
                          }}
                        />
                      </div>
                    <div className="relative text-lg leading-[28px] font-h50-16-bold text-neutral-400 inline-block w-[648px]">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[16px] text-white">
                  <div className="w-[832px] flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center p-4 gap-[8px]">
                        <div className="relative leading-[20px] font-medium">
                          Unlock your Card
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M4.66666 10.0001H16.3333M16.3333 10.0001L10.5 4.16675M16.3333 10.0001L10.5 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-sm leading-[20px] font-medium text-neutral-400 inline-block w-[832px]">
                    *No credit card required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border">
        <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border">
          <motion.div className="w-[1216px] flex flex-row items-center justify-between" initial={{ x: 0 }}
                animate={{ x: 100 }} 
                transition={{
                  ease: "linear",
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}>
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
          </motion.div>
        </div>
      </div>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border text-21xl">
        <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border">
          <div className="w-[1216px] flex flex-col items-center justify-center gap-[96px]">
            <div className="w-[1216px] flex flex-col items-center justify-center">
              <div className="w-[704px] flex flex-col items-center justify-start gap-[32px]">
                <div className="w-[704px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[48px] font-semibold">
                    Elevating Card Programs with Cutting-Edge Technology
                  </div>
                  <div className="relative text-lg leading-[28px] font-h50-16-bold text-neutral-400 inline-block w-[576px]">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-base text-pri-purple-400 font-h50-16-bold">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-lg flex flex-row items-center justify-center gap-[8px]">
                      <div className="relative leading-[20px] font-medium">
                        Compare all Pro features
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M4.66666 9.99996H16.3333M16.3333 9.99996L10.5 4.16663M16.3333 9.99996L10.5 15.8333" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[32px] text-base font-h50-16-bold">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-start gap-[16px]">
                  <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[16px]">
                    <div className="relative leading-[20px] font-medium inline-block w-[352px]">
                      Globally Accepted
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-80">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-start gap-[16px]">
                  <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9063 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.027 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3354 18.2919 11.9291 18.9012 11.4161 19.4141C10.9032 19.9271 10.2939 20.3334 9.6233 20.6099C8.95268 20.8864 8.234 21.0275 7.50863 21.025C6.78327 21.0226 6.06554 20.8767 5.39679 20.5958C4.72804 20.3148 4.12147 19.9043 3.612 19.388C2.61013 18.3507 2.05576 16.9614 2.06829 15.5193C2.08082 14.0772 2.65925 12.6977 3.679 11.678C4.69874 10.6583 6.07821 10.0798 7.52029 10.0673C8.96238 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[16px]">
                    <div className="relative leading-[20px] font-medium inline-block w-[352px]">
                      Biometric Integrated
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-80">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-start gap-[16px]">
                  <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[16px]">
                    <div className="relative leading-[20px] font-medium inline-block w-[352px]">
                      Fully Secured
                    </div>
                    <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-80">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border text-21xl">
        <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border">
          <div className="w-[1216px] flex flex-col items-center justify-center gap-[96px]">
            <div className="w-[1216px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-start gap-[32px]">
                <div className="w-[704px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[48px] font-semibold">
                    Elevating Card Programs with Cutting-Edge Technology
                  </div>
                  <div className="relative text-lg leading-[28px] font-h50-16-bold text-neutral-400 inline-block w-[576px]">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-base text-pri-purple-400 font-h50-16-bold">
                  <div className="flex flex-row items-start justify-start">
                    <div className="rounded-lg flex flex-row items-center justify-center gap-[8px]">
                      <div className="relative leading-[20px] font-medium">
                        Compare all Pro features
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M4.66666 9.99996H16.3333M16.3333 9.99996L10.5 4.16663M16.3333 9.99996L10.5 15.8333" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[1216px] flex flex-row items-start justify-start gap-[32px] text-left text-[19.48px]">
            
            <div className="relative rounded-lg bg-ghostwhite w-[592px] h-[490px] overflow-hidden shrink-0">

                <img className="relative rounded-lg w-[592px] h-[490px] overflow-hidden shrink-0 object-cover" alt="" src="/images/blackphone.png" />

                <div className="absolute top-[15%] left-[15%] w-[100%] h-[100%]">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="55" viewBox="0 0 59 55" fill="none">
                    <path d="M33 0C33 0 34.4346 13.3898 40.0224 18.9776C45.6102 24.5654 59 26 59 26C59 26 45.6102 27.4346 40.0224 33.0224C34.4346 38.6102 33 52 33 52C33 52 31.5654 38.6102 25.9776 33.0224C20.3898 27.4346 7 26 7 26C7 26 20.3898 24.5654 25.9776 18.9776C31.5654 13.3898 33 0 33 0Z" fill="url(#paint0_linear_1313_1202)"/>
                    <path d="M12 28C12 28 12.6621 34.1799 15.2411 36.7589C17.8201 39.3379 24 40 24 40C24 40 17.8201 40.6621 15.2411 43.2411C12.6621 45.8201 12 52 12 52C12 52 11.3379 45.8201 8.75891 43.2411C6.17992 40.6621 0 40 0 40C0 40 6.17992 39.3379 8.75891 36.7589C11.3379 34.1799 12 28 12 28Z" fill="url(#paint1_linear_1313_1202)"/>
                    <path d="M22 43C22 43 22.3311 46.09 23.6205 47.3795C24.91 48.6689 28 49 28 49C28 49 24.91 49.3311 23.6205 50.6205C22.3311 51.91 22 55 22 55C22 55 21.6689 51.91 20.3795 50.6205C19.09 49.3311 16 49 16 49C16 49 19.09 48.6689 20.3795 47.3795C21.6689 46.09 22 43 22 43Z" fill="url(#paint2_linear_1313_1202)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1313_1202" x1="33" y1="0" x2="33" y2="52" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1313_1202" x1="12" y1="28" x2="12" y2="52" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1313_1202" x1="22" y1="43" x2="22" y2="55" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                </div>             
              <div className="relative rounded-lg bg-ghostwhite w-[592px] h-[490px] overflow-hidden shrink-0">
                <div className="absolute top-[107px] left-[76px] w-[439.68px] h-[275.04px]">
                  <div className="absolute top-[4px] left-[31px] rounded-[12.98px] bg-white flex flex-col items-center justify-center p-[25.96825408935547px] border-[1px] border-solid border-mediumpurple">
                    <div className="flex flex-col items-start justify-start gap-[27.59px]">
                      <div className="flex flex-row items-start justify-start gap-[219.92px]">
                        <div className="flex flex-col items-start justify-start gap-[4.87px]">
                          <div className="relative leading-[25.97px] font-semibold">
                            Spending
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[4.87px] text-[12.98px] text-neutral-400 font-h50-16-bold">
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <g clip-path="url(#clip0_1313_1166)">
                            <path d="M3.4028 7.3293C3.4028 6.68362 3.6593 6.06439 4.11586 5.60783C4.57242 5.15127 5.19165 4.89478 5.83733 4.89478H15.5754C16.2211 4.89478 16.8403 5.15127 17.2969 5.60783C17.7535 6.06439 18.0099 6.68362 18.0099 7.3293V13.8214C18.0099 14.467 17.7535 15.0863 17.2969 15.5428C16.8403 15.9994 16.2211 16.2559 15.5754 16.2559H5.83733C5.19165 16.2559 4.57242 15.9994 4.11586 15.5428C3.6593 15.0863 3.4028 14.467 3.4028 13.8214V7.3293Z" stroke="#5A6475" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.4028 8.95227H18.0099" stroke="#5A6475" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.64883 13.0098H6.65768" stroke="#5A6475" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.89487 13.0098H11.5179" stroke="#5A6475" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1313_1166">
                            <rect width="19.4762" height="19.4762" fill="white" transform="translate(0.968262 0.83728)"/>
                            </clipPath>
                            </defs>
                           </svg>
                            <div className="relative leading-[16.23px] font-medium">
                              9349 visa card
                            </div>
                          </div>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_1313_1173)">
                            <path d="M13.2163 4.21436H16.4623V7.46039" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5933 9.0834L16.4623 4.21436" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.72422 17.1984H3.47819V13.9524" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.47819 17.1984L8.34724 12.3293" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.2163 17.1984H16.4623V13.9524" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5933 12.3293L16.4623 17.1984" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.72422 4.21436H3.47819V7.46039" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.47819 4.21436L8.34724 9.0834" stroke="#2C3E50" stroke-width="1.21726" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1313_1173">
                            <rect width="19.4762" height="19.4762" fill="white" transform="translate(0.232147 0.968262)"/>
                            </clipPath>
                        </defs>
                        </svg>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-[9.74px] text-[32.46px]">
                        <div className="flex flex-row items-center justify-start gap-[8.93px]">
                          <div className="relative leading-[38.95px] font-medium">
                            127.14
                          </div>
                          <div className="relative text-[12.98px] leading-[16.23px] font-medium font-h50-16-bold">
                            USD
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[30.03px] text-[12.98px] text-neutral-400 font-h50-16-bold">
                          <div className="relative leading-[16.23px] font-medium">
                            vs last week
                          </div>
                          <div className="relative leading-[16.23px] font-medium">
                            Last Purchased ( Feb 24 19:59 UTC-5 )
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-[5.68px] text-[12.98px] text-neutral-400 font-h50-16-bold">
                        <div className="relative w-[316.38px] h-[29.98px]">
                          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start p-[6.492063522338867px]">
                            <div className="relative leading-[16.23px] font-medium">
                              400 USD
                            </div>
                          </div>
                          <div className="absolute top-[6.49px] left-[111.99px] leading-[16.23px] font-medium">
                            1000 USD
                          </div>
                          <div className="absolute top-[6.49px] left-[252.38px] leading-[16.23px] font-medium">
                            5000 USD
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[3.25px]">
                          <div className="relative rounded-tl-[12.98px] rounded-tr-none rounded-br-none rounded-bl-[12.98px] bg-pri-purple-400 w-[102.25px] h-[12.17px]" />
                          <div className="relative w-[141.2px] h-[12.17px]">
                            <div className="absolute top-[0px] left-[0px] bg-lavender w-[141.2px] h-[12.17px]" />
                            <div className="absolute top-[0px] left-[0px] bg-pri-purple-400 w-[77.09px] h-[12.17px]" />
                          </div>
                          <div className="relative rounded-tl-[12.98px] rounded-tr-none rounded-br-none rounded-bl-[12.98px] bg-lavender w-[102.25px] h-[12.17px] [transform:_rotate(-180deg)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0] left-[0] w-[100%] h-[100%]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="55" viewBox="0 0 59 55" fill="none">
                    <path d="M33 0C33 0 34.4346 13.3898 40.0224 18.9776C45.6102 24.5654 59 26 59 26C59 26 45.6102 27.4346 40.0224 33.0224C34.4346 38.6102 33 52 33 52C33 52 31.5654 38.6102 25.9776 33.0224C20.3898 27.4346 7 26 7 26C7 26 20.3898 24.5654 25.9776 18.9776C31.5654 13.3898 33 0 33 0Z" fill="url(#paint0_linear_1313_1202)"/>
                    <path d="M12 28C12 28 12.6621 34.1799 15.2411 36.7589C17.8201 39.3379 24 40 24 40C24 40 17.8201 40.6621 15.2411 43.2411C12.6621 45.8201 12 52 12 52C12 52 11.3379 45.8201 8.75891 43.2411C6.17992 40.6621 0 40 0 40C0 40 6.17992 39.3379 8.75891 36.7589C11.3379 34.1799 12 28 12 28Z" fill="url(#paint1_linear_1313_1202)"/>
                    <path d="M22 43C22 43 22.3311 46.09 23.6205 47.3795C24.91 48.6689 28 49 28 49C28 49 24.91 49.3311 23.6205 50.6205C22.3311 51.91 22 55 22 55C22 55 21.6689 51.91 20.3795 50.6205C19.09 49.3311 16 49 16 49C16 49 19.09 48.6689 20.3795 47.3795C21.6689 46.09 22 43 22 43Z" fill="url(#paint2_linear_1313_1202)"/>
                    <defs>
                        <linearGradient id="paint0_linear_1313_1202" x1="33" y1="0" x2="33" y2="52" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1313_1202" x1="12" y1="28" x2="12" y2="52" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1313_1202" x1="22" y1="43" x2="22" y2="55" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#814BF4"/>
                        <stop offset="1" stop-color="#8E5CF7" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    </svg>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-24 px-20 text-29xl text-pri-purple-400">
        <div className="flex flex-col items-center justify-center py-0 px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start gap-[32px]">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-[248px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[56px] font-semibold">
                    2 Million
                  </div>
                  <div className="w-[248px] flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                    <div className="relative leading-[20px] font-medium inline-block w-[248px]">
                      Customers
                    </div>
                    <div className="relative leading-[28px] text-neutral-400 inline-block w-[248px]">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-[248px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[56px] font-semibold">
                    1K
                  </div>
                  <div className="w-[248px] flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                    <div className="relative leading-[20px] font-medium inline-block w-[248px]">
                      Downloads
                    </div>
                    <div className="relative leading-[28px] text-neutral-400 inline-block w-[248px]">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-[248px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[56px] font-semibold">
                    $73 Million
                  </div>
                  <div className="w-[248px] flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                    <div className="relative leading-[20px] font-medium inline-block w-[248px]">
                      Transaction
                    </div>
                    <div className="relative leading-[28px] text-neutral-400 inline-block w-[248px]">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-[248px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch relative leading-[56px] font-semibold">
                    2.0
                  </div>
                  <div className="w-[248px] flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                    <div className="relative leading-[20px] font-medium inline-block w-[248px]">
                      Latest Version
                    </div>
                    <div className="relative leading-[28px] text-neutral-400 inline-block w-[248px]">
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border text-13xl text-neutral-100">
        <div className="w-[1280px] flex flex-col items-center justify-center p-8 box-border">
          <div className="w-[1216px] flex flex-col items-center justify-center">
            <div className="w-[824px] flex flex-col items-center justify-start gap-[48px]">
              <div className="w-[824px] flex flex-col items-center justify-start gap-[32px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="98" height="24" viewBox="0 0 98 24" fill="none">
                <g clip-path="url(#clip0_1313_287)">
                    <path d="M54.3049 0.359H60.3125L57.2893 23.681H51.2817L54.3049 0.359ZM46.7303 0.359L42.6762 13.794L40.9076 0.359H36.7056L31.397 13.754L30.7341 0.36H24.9105L26.938 23.682H31.7668L37.7374 8.932L39.8379 23.682H44.5928L52.4439 0.359H46.7303ZM97.1707 13.914H82.9062C82.9801 16.944 84.6572 18.937 87.1266 18.937C88.9886 18.937 90.4623 17.86 91.605 15.807L96.42 18.175C94.7651 21.702 91.2778 24 86.9796 24C81.119 24 77.2305 19.734 77.2305 12.877C77.2305 5.342 81.8004 0 88.2509 0C93.9275 0 97.5026 4.146 97.5026 10.605C97.5026 11.681 97.3917 12.757 97.1707 13.914ZM91.8269 9.448C91.8269 6.738 90.4253 5.023 88.1778 5.023C85.8554 5.023 83.9389 6.817 83.422 9.448H91.8269ZM6.13147 7.387L0 15.139H10.9501L12.1797 11.484H7.48868L10.3547 7.898L10.364 7.803L8.50011 4.332H16.8874L10.3862 23.682H14.835L22.6861 0.358H2.40377L6.1324 7.386L6.13147 7.387ZM70.0792 5.023C72.1983 5.023 74.0547 6.256 75.6773 8.369L76.5288 1.794C75.019 0.688 72.973 0 70.2642 0C64.8834 0 61.8602 3.409 61.8602 7.734C61.8602 10.734 63.4088 12.568 65.9521 13.754L67.1679 14.352C69.4348 15.399 70.0432 15.917 70.0432 17.023C70.0432 18.169 69.0207 18.897 67.4638 18.897C64.8917 18.907 62.8097 17.482 61.2435 15.05L60.3745 21.749C62.1597 23.22 64.447 24 67.4628 24C72.5773 24 75.7189 20.81 75.7189 16.385C75.7189 13.375 74.4846 11.442 71.3699 9.927L70.0432 9.249C68.1997 8.362 67.5738 7.874 67.5738 6.897C67.5738 5.841 68.4308 5.023 70.0792 5.023Z" fill="#163300"/>
                </g>
                <defs>
                    <clipPath id="clip0_1313_287">
                    <rect width="98" height="24" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                <div className="self-stretch relative leading-[40px] font-medium">
                  I had the pleasure of experiencing the next generation of card
                  solutions with this incredible product. it is refreshing to see
                  such innovation in the financial industry.
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[12px] text-base text-neutral-50 font-h50-16-bold">
                <div className="flex flex-col items-center justify-center gap-[16px]">
                  <img
                    className="relative w-16 h-16 object-cover"
                    alt=""
                    src="/images/person.jpg"
                  />
                  <div className="w-[134px] flex flex-col items-center justify-start gap-[4px]">
                    <div className="self-stretch relative leading-[20px] font-medium">
                      Nick Babich
                    </div>
                    <div className="self-stretch relative text-sm leading-[20px] text-neutral-400">
                      Lead Designer
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center py-1 px-2">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/images/star.png"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/images/star.png"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/images/star.png"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/images/star.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] flex flex-col items-center justify-center py-24 px-20 box-border text-21xl">
        <div className="w-[1280px] flex flex-col items-center justify-center py-0 px-8 box-border">
          <div className="w-[1216px] flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="relative leading-[48px] font-semibold inline-block w-[704px] shrink-0">
                Unlock Limitless Possibilities with Our New Card Solutions
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[8px] text-base text-white font-h50-16-bold">
              <div className="flex flex-row items-center justify-center">
                <div className="rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center py-3 px-4 gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Unlock your card
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/credit-card.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center text-neutral-400">
                <div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-3 px-4 gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Customer support
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/headphones.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center pt-24 px-20 pb-10 text-neutral-400 font-h50-16-bold border-t-[1px] border-solid border-neutral-1000">
        <div className="flex flex-col items-center justify-center py-0 px-8">
          <div className="flex flex-col items-start justify-start gap-[96px]">
            <div className="flex flex-col items-start justify-start gap-[64px]">
              <div className="flex flex-col items-start justify-start gap-[64px]">
                <div className="w-[1216px] flex flex-col items-center justify-center">
                  <div className="w-[512px] flex flex-col items-center justify-center gap-[16px]">
                    <div className="flex flex-col items-center justify-start py-1 px-0">
                      <img
                        className="relative w-[84px] h-4 object-cover"
                        alt=""
                        src="/images/Vector.jpg"
                      />
                    </div>
                    <div className="self-stretch relative leading-[28px] font-medium">
                      Mode UI is a comprehensive design system that empowers
                      designers and developers to create cohesive and visually
                      stunning user interfaces across various platforms and
                      devices
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[1217px] h-px border-t-[1px] border-solid border-neutral-1300" />
              </div>
              <div className="w-[1216px] flex flex-col items-center justify-center text-left text-neutral-100">
                <div className="flex flex-row items-start justify-start gap-[32px]">
                  <div className="w-52 flex flex-col items-start justify-start gap-[24px]">
                    <b className="self-stretch relative leading-[20px]">
                      Company
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-200">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          About us
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Pricing
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Contact us
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Features
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-52 flex flex-col items-start justify-start gap-[24px]">
                    <b className="self-stretch relative leading-[20px]">
                      Product
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-200">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Figma design system
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Ios kit
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Android kit
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Wireframe
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-52 flex flex-col items-start justify-start gap-[24px]">
                    <b className="self-stretch relative leading-[20px]">
                      Resources
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-200">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Templates
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Landing pages
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Documentation
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Comp library
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-52 flex flex-col items-start justify-start gap-[24px]">
                    <b className="self-stretch relative leading-[20px]">
                      Legal
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-200">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Privacy policy
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">{`Terms & Conditions`}</div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Disclaimer
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Affiliate programme
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-52 flex flex-col items-start justify-start gap-[24px]">
                    <b className="self-stretch relative leading-[20px]">
                      Support
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-200">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Help centre
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Raise ticket
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Report
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] font-medium">
                          Refund
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px] text-sm">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center gap-[24px]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/images/github.png"
                    />
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/Social.png"
                  />
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_1313_829)">
    <path d="M16.9307 4.24315C15.6557 3.66815 14.289 3.24315 12.8599 3.00148C12.8471 2.99904 12.834 3.00061 12.8222 3.00599C12.8104 3.01136 12.8006 3.02027 12.794 3.03148C12.619 3.33898 12.424 3.73981 12.2874 4.05648C10.7716 3.83001 9.23064 3.83001 7.71489 4.05648C7.56267 3.70553 7.39102 3.36334 7.20073 3.03148C7.19428 3.02013 7.18452 3.01102 7.17276 3.00537C7.16099 2.99971 7.14779 2.99777 7.13489 2.99982C5.70656 3.24148 4.3399 3.66648 3.06407 4.24231C3.05309 4.24692 3.04379 4.25477 3.0374 4.26481C0.444078 8.0773 -0.266754 11.7957 0.0824121 15.4673C0.0833837 15.4763 0.0861751 15.485 0.0906162 15.4929C0.0950574 15.5008 0.101055 15.5077 0.108245 15.5131C1.6219 16.6152 3.31018 17.4547 5.1024 17.9965C5.11489 18.0003 5.12826 18.0003 5.14074 17.9964C5.15323 17.9926 5.16426 17.985 5.1724 17.9748C5.5574 17.4581 5.90073 16.9123 6.19406 16.339C6.21156 16.3056 6.1949 16.2656 6.1599 16.2523C5.62157 16.0496 5.09997 15.8049 4.5999 15.5206C4.59091 15.5155 4.58334 15.5082 4.57786 15.4995C4.57239 15.4907 4.56917 15.4807 4.56851 15.4704C4.56785 15.46 4.56976 15.4497 4.57408 15.4403C4.57839 15.4309 4.58498 15.4227 4.59323 15.4165C4.69823 15.339 4.80323 15.2581 4.90323 15.1773C4.91223 15.17 4.92308 15.1654 4.93455 15.1639C4.94603 15.1625 4.95769 15.1642 4.96823 15.169C8.24072 16.639 11.7849 16.639 15.019 15.169C15.0296 15.1639 15.0414 15.162 15.053 15.1633C15.0647 15.1646 15.0757 15.1692 15.0849 15.1765C15.1849 15.2581 15.289 15.339 15.3949 15.4165C15.4032 15.4226 15.4099 15.4307 15.4144 15.44C15.4188 15.4493 15.4209 15.4596 15.4204 15.4699C15.4199 15.4802 15.4168 15.4903 15.4115 15.4991C15.4062 15.508 15.3988 15.5154 15.3899 15.5206C14.8915 15.8073 14.3732 16.0498 13.829 16.2515C13.8207 16.2545 13.8131 16.2593 13.8067 16.2655C13.8003 16.2717 13.7954 16.2792 13.7922 16.2875C13.7889 16.2958 13.7875 16.3047 13.788 16.3135C13.7884 16.3224 13.7908 16.3311 13.7949 16.339C14.0949 16.9115 14.4382 17.4565 14.8157 17.974C14.8236 17.9846 14.8345 17.9925 14.847 17.9967C14.8595 18.0009 14.8731 18.0011 14.8857 17.9973C16.681 17.457 18.372 16.6171 19.8874 15.5131C19.8948 15.508 19.901 15.5013 19.9056 15.4935C19.9102 15.4858 19.913 15.4771 19.914 15.4681C20.3307 11.2232 19.2157 7.5348 16.9565 4.26648C16.951 4.25586 16.9418 4.24758 16.9307 4.24315ZM6.68323 13.2315C5.69823 13.2315 4.88573 12.3407 4.88573 11.2482C4.88573 10.1548 5.6824 9.2648 6.68323 9.2648C7.69156 9.2648 8.49656 10.1623 8.48072 11.2482C8.48072 12.3415 7.68406 13.2315 6.68323 13.2315ZM13.329 13.2315C12.3432 13.2315 11.5315 12.3407 11.5315 11.2482C11.5315 10.1548 12.3274 9.2648 13.329 9.2648C14.3374 9.2648 15.1424 10.1623 15.1265 11.2482C15.1265 12.3415 14.3382 13.2315 13.329 13.2315Z" fill="#5A6475"/>
  </g>
  <defs>
    <clipPath id="clip0_1313_829">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
                </div>
              </div>
              <div className="relative leading-[20px] whitespace-pre-wrap inline-block w-[1216px]">
                © 2023 Mode UI Inc. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
