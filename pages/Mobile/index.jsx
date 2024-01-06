import ReactTypingEffect from 'react-typing-effect';
const Mobile = () => {
  const words = ["Unleashing","the Next", "Generation ","of Card", "Solutions"];
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-center text-base text-neutral-50 font-h100-20-medium">
      <div className="bg-white box-border w-[375px] flex flex-col items-center justify-center p-2 text-xs text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
            <div className="rounded-221xl bg-neutral-1300 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-neutral-1000">
              <div className="relative leading-[16px] font-medium">
                Announcement
              </div>
            </div>
            <div className="flex-1 relative leading-[16px] font-medium text-neutral-50 text-left">
              We are happy to announce that we raise $2 Million in Seed Funding
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-start py-5 px-4 text-neutral-400 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="w-[343px] flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start p-2">
            <div className="flex flex-col items-start justify-start py-1 px-2">
              <img
                className="relative w-[84px] h-4 object-cover"
                alt=""
                src="/images/Vector.jpg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Login
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/log-in.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end p-2">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/images/menu.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[375px] h-[476px] text-pri-purple-400 font-h50-16-bold">
        <img
          className="absolute h-[42.02%] w-[91.47%] top-[14.5%] right-[4.27%] bottom-[43.49%] left-[4.27%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/images/Mesh.png"
        />
        <div className="absolute h-[110.08%] w-full top-[-5.04%] right-[0%] bottom-[-5.04%] left-[0%] flex flex-row items-center justify-center pt-16 px-4 pb-8 box-border">
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <div className="flex flex-col items-center justify-start gap-[16px]">
              <div className="relative leading-[20px] font-medium inline-block w-[343px]">
                Seamless experience
              </div>
              <div className="w-[343px] flex flex-col items-start justify-start gap-[16px] text-21xl text-neutral-50 font-h100-20-medium">
                <div className="relative leading-[48px] font-semibold inline-block w-[343px]">
                <ReactTypingEffect
                          text={words}
                          speed={100}
                          eraseSpeed={100}
                          typingDelay={500}
                          eraseDelay={1000}
                          cursorRenderer={cursor => <h1>{cursor}</h1>}
                          cursorClassName='cursorSizembl'
                          displayTextRenderer={(text, i) => {
                            return (
                              <h1>
                                {text.split('').map((char, i) => {
                                  const key = `${i}`;
                                  return (
                                    <span
                                      key={key}
                                      style={{ color: i%2 === 0 ? 'neutral' : 'purple' , fontWeight: 600 , fontSize:'40px' }}
                                    >{char}</span>
                                  );
                                })}
                              </h1>
                            );
                          }}
                        />
                </div>
                <div className="relative text-lg leading-[28px] font-h50-16-bold text-neutral-400 inline-block w-[343px]">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud
                </div>
              </div>
            </div>
            <div className="w-[343px] flex flex-col items-center justify-start gap-[16px] text-white">
              <div className="w-[343px] flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="flex-1 rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center p-4 gap-[8px]">
                    <div className="relative leading-[20px] font-medium">
                      Unlock your Card
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.16663 10.0001H15.8333M15.8333 10.0001L9.99996 4.16675M15.8333 10.0001L9.99996 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </div>
                </div>
              </div>
              <div className="relative text-sm leading-[20px] font-medium text-neutral-400 inline-block w-[343px]">
                *No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[375px] flex flex-col items-center justify-center py-16 px-4 box-border">
        <div className="w-[343px] flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <div className="w-[343px] flex flex-row items-center justify-between">
              <div className="flex flex-col items-center justify-center p-2">
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
      <div className="bg-white flex flex-row items-center justify-center py-16 px-4 text-13xl">
        <div className="flex flex-col items-start justify-start gap-[48px]">
          <div className="w-[343px] flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
              <div className="self-stretch relative leading-[40px] font-semibold">
                Elevating Card Programs with Cutting-Edge Technology
              </div>
              <div className="self-stretch relative text-lg leading-[28px] font-h50-16-bold text-neutral-400">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-base text-pri-purple-400 font-h50-16-bold">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-lg flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Compare all Pro features
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.16663 9.99996H15.8333M15.8333 9.99996L9.99996 4.16663M15.8333 9.99996L9.99996 15.8333" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-base font-h50-16-bold">
            <div className="w-[343px] flex flex-col items-center justify-center p-4 box-border">
              <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22M22.5 12C22.5 6.47715 18.0228 2 12.5 2M22.5 12H2.5M12.5 22C6.97715 22 2.5 17.5228 2.5 12M12.5 22C15.0013 19.2616 16.4228 15.708 16.5 12C16.4228 8.29203 15.0013 4.73835 12.5 2M12.5 22C9.99872 19.2616 8.57725 15.708 8.5 12C8.57725 8.29203 9.99872 4.73835 12.5 2M2.5 12C2.5 6.47715 6.97715 2 12.5 2" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Globally Accepted
                  </div>
                  <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-[311px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                </div>
              </div>
            </div>
            <div className="w-[343px] flex flex-col items-center justify-center p-4 box-border">
              <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M21.5 2L19.5 4M19.5 4L22.5 7L19 10.5L16 7.5M19.5 4L16 7.5M11.89 11.61C12.4064 12.1195 12.8168 12.726 13.0978 13.3948C13.3787 14.0635 13.5246 14.7813 13.5271 15.5066C13.5295 16.232 13.3884 16.9507 13.1119 17.6213C12.8355 18.2919 12.4291 18.9012 11.9162 19.4141C11.4033 19.9271 10.794 20.3334 10.1233 20.6099C9.45271 20.8864 8.73403 21.0275 8.00866 21.025C7.2833 21.0226 6.56557 20.8767 5.89682 20.5958C5.22807 20.3148 4.6215 19.9043 4.11203 19.388C3.11016 18.3507 2.55579 16.9614 2.56832 15.5193C2.58085 14.0772 3.15928 12.6977 4.17903 11.678C5.19877 10.6583 6.57824 10.0798 8.02032 10.0673C9.46241 10.0548 10.8517 10.6091 11.889 11.611L11.89 11.61ZM11.89 11.61L16 7.5" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Biometric Integrated
                  </div>
                  <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-[311px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                </div>
              </div>
            </div>
            <div className="w-[343px] flex flex-col items-center justify-center p-4 box-border">
              <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                <div className="rounded-221xl bg-pri-purple-900 flex flex-row items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M7.5 11V7C7.5 5.67392 8.02678 4.40215 8.96447 3.46447C9.90215 2.52678 11.1739 2 12.5 2C13.8261 2 15.0979 2.52678 16.0355 3.46447C16.9732 4.40215 17.5 5.67392 17.5 7V11M5.5 11H19.5C20.6046 11 21.5 11.8954 21.5 13V20C21.5 21.1046 20.6046 22 19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20V13C3.5 11.8954 4.39543 11 5.5 11Z" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <div className="w-[311px] flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Fully Secured
                  </div>
                  <div className="relative text-sm leading-[24px] font-medium text-neutral-400 inline-block w-[311px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-16 px-4 text-13xl">
        <div className="flex flex-col items-start justify-start gap-[48px]">
          <div className="w-[343px] flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
              <div className="self-stretch relative leading-[40px] font-semibold">
                Elevating Card Programs with Cutting-Edge Technology
              </div>
              <div className="self-stretch relative text-lg leading-[28px] font-h50-16-bold text-neutral-400">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-base text-pri-purple-400 font-h50-16-bold">
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-lg flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative leading-[20px] font-medium">
                    Compare all Pro features
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334" stroke="#582066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-left text-[12.36px]">
            <div className="w-full md:w-[1216px] flex flex-row items-start justify-start gap-[32px] text-left text-[19.48px]">     
                <div className="relative rounded-lg bg-ghostwhite w-full md:w-[592px] h-[490px] md:h-[490px] overflow-hidden shrink-0">
                <img className="relative rounded-lg w-full h-[490px] md:h-[490px] overflow-hidden shrink-0 object-cover" alt="" src="/images/blackphone.png" />
                            <div className="absolute top-[15%] left-[0] w-[100%] h-[100%]">
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
            <div className="relative rounded-lg bg-ghostwhite w-[343px] h-[284px] overflow-hidden shrink-0">
              <div className="absolute top-[55px] left-[32px] w-[279px] h-[174.53px]">
                <div className="absolute top-[2.54px] left-[19.67px] rounded-[8.24px] bg-white box-border w-[259.33px] h-[171.99px] flex flex-col items-center justify-center p-[16.478347778320312px] border-[0.6px] border-solid border-mediumpurple">
                  <div className="flex flex-col items-start justify-start gap-[17.51px]">
                    <div className="flex flex-row items-start justify-start gap-[139.55px]">
                      <div className="flex flex-col items-start justify-start gap-[3.09px]">
                        <div className="relative leading-[16.48px] font-semibold">
                          Spending
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[3.09px] text-[8.24px] text-neutral-400 font-h50-16-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <g clip-path="url(#clip0_1317_1580)">
                            <path d="M1.70166 4.63725C1.70166 4.22753 1.86442 3.8346 2.15413 3.54488C2.44385 3.25517 2.83679 3.09241 3.24651 3.09241H9.42588C9.8356 3.09241 10.2285 3.25517 10.5183 3.54488C10.808 3.8346 10.9707 4.22753 10.9707 4.63725V8.75684C10.9707 9.16656 10.808 9.55949 10.5183 9.84921C10.2285 10.1389 9.8356 10.3017 9.42588 10.3017H3.24651C2.83679 10.3017 2.44385 10.1389 2.15413 9.84921C1.86442 9.55949 1.70166 9.16656 1.70166 8.75684V4.63725Z" stroke="#5A6475" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.70166 5.66742H10.9707" stroke="#5A6475" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.76111 8.24139H3.76658" stroke="#5A6475" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.82117 8.24139H6.85106" stroke="#5A6475" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1317_1580">
                            <rect width="12.3588" height="12.3588" fill="white" transform="translate(0.156372 0.517303)"/>
                            </clipPath>
                        </defs>
                        </svg>
                          <div className="relative leading-[10.3px] font-medium">
                            9349 visa card
                          </div>
                        </div>
                      </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clip-path="url(#clip0_1317_1587)">
                    <path d="M8.39465 2.48752H10.4544V4.54731" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.36462 5.57721L10.4543 2.48752" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.27488 10.7263H2.21509V8.6665" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.21509 10.7272L5.30478 7.63754" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.39465 10.7263H10.4544V8.6665" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.36462 7.63754L10.4543 10.7272" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.27488 2.48752H2.21509V4.54731" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.21509 2.48752L5.30478 5.57721" stroke="#2C3E50" stroke-width="0.772422" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_1317_1587">
                    <rect width="12.3588" height="12.3588" fill="white" transform="translate(0.155762 0.427612)"/>
                    </clipPath>
                </defs>
                </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[6.18px] text-xl-6">
                      <div className="flex flex-row items-center justify-start gap-[5.66px]">
                        <div className="relative leading-[24.72px] font-medium">
                          127.14
                        </div>
                        <div className="relative text-[8.24px] leading-[10.3px] font-medium font-h50-16-bold">
                          USD
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[19.05px] text-[8.24px] text-neutral-400 font-h50-16-bold">
                        <div className="relative leading-[10.3px] font-medium">
                          vs last week
                        </div>
                        <div className="relative leading-[10.3px] font-medium">
                          Last Purchased ( Feb 24 19:59 UTC-5 )
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[3.6px] text-[8.24px] text-neutral-400 font-h50-16-bold">
                      <div className="relative w-[201.15px] h-[19.24px]">
                        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start p-[4.119586944580078px]">
                          <div className="relative leading-[10.3px] font-medium">
                            400 USD
                          </div>
                        </div>
                        <div className="absolute top-[4.12px] left-[71.06px] leading-[10.3px] font-medium">
                          1000 USD
                        </div>
                        <div className="absolute top-[4.12px] left-[160.15px] leading-[10.3px] font-medium">
                          5000 USD
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[2.06px]">
                        <div className="relative rounded-tl-[8.24px] rounded-tr-none rounded-br-none rounded-bl-[8.24px] bg-pri-purple-400 w-[64.88px] h-[7.72px]" />
                        <div className="relative w-[89.6px] h-[7.72px]">
                          <div className="absolute top-[0px] left-[0px] bg-lavender w-[89.6px] h-[7.72px]" />
                          <div className="absolute top-[0px] left-[0px] bg-pri-purple-400 w-[48.92px] h-[7.72px]" />
                        </div>
                        <div className="relative rounded-tl-[8.24px] rounded-tr-none rounded-br-none rounded-bl-[8.24px] bg-lavender w-[64.88px] h-[7.72px] [transform:_rotate(-180deg)]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0] right-[7%] w-[100%] h-[100%]">
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
      <div className="bg-white flex flex-row items-center justify-center py-16 px-4 text-21xl text-pri-purple-400">
        <div className="w-[343px] flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-center p-4">
              <div className="w-[223px] flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch relative leading-[48px] font-semibold">
                  2 Million
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Customers
                  </div>
                  <div className="self-stretch relative leading-[28px] text-neutral-400">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center p-4">
              <div className="w-[223px] flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch relative leading-[48px] font-semibold">
                  1K
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Downloads
                  </div>
                  <div className="self-stretch relative leading-[28px] text-neutral-400">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center p-4">
              <div className="w-[223px] flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch relative leading-[48px] font-semibold">
                  $73 Million
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Transaction
                  </div>
                  <div className="self-stretch relative leading-[28px] text-neutral-400">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center p-4">
              <div className="w-[223px] flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch relative leading-[48px] font-semibold">
                  2.0
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-neutral-50 font-h50-16-bold">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Latest Version
                  </div>
                  <div className="self-stretch relative leading-[28px] text-neutral-400">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-row items-center justify-center py-16 px-4 text-xl text-neutral-100">
        <div className="flex flex-col items-center justify-start gap-[48px]">
          <div className="w-[343px] flex flex-col items-center justify-start gap-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="99" height="24" viewBox="0 0 99 24" fill="none">
  <g clip-path="url(#clip0_1317_1459)">
    <path d="M54.8049 0.359H60.8125L57.7893 23.681H51.7817L54.8049 0.359ZM47.2303 0.359L43.1762 13.794L41.4076 0.359H37.2056L31.897 13.754L31.2341 0.36H25.4105L27.438 23.682H32.2668L38.2374 8.932L40.3379 23.682H45.0928L52.9439 0.359H47.2303ZM97.6707 13.914H83.4062C83.4801 16.944 85.1572 18.937 87.6266 18.937C89.4886 18.937 90.9623 17.86 92.105 15.807L96.92 18.175C95.2651 21.702 91.7778 24 87.4796 24C81.619 24 77.7305 19.734 77.7305 12.877C77.7305 5.342 82.3004 0 88.7509 0C94.4275 0 98.0026 4.146 98.0026 10.605C98.0026 11.681 97.8917 12.757 97.6707 13.914ZM92.3269 9.448C92.3269 6.738 90.9253 5.023 88.6778 5.023C86.3554 5.023 84.4389 6.817 83.922 9.448H92.3269ZM6.63147 7.387L0.5 15.139H11.4501L12.6797 11.484H7.98868L10.8547 7.898L10.864 7.803L9.00011 4.332H17.3874L10.8862 23.682H15.335L23.1861 0.358H2.90377L6.6324 7.386L6.63147 7.387ZM70.5792 5.023C72.6983 5.023 74.5547 6.256 76.1773 8.369L77.0288 1.794C75.519 0.688 73.473 0 70.7642 0C65.3834 0 62.3602 3.409 62.3602 7.734C62.3602 10.734 63.9088 12.568 66.4521 13.754L67.6679 14.352C69.9348 15.399 70.5432 15.917 70.5432 17.023C70.5432 18.169 69.5207 18.897 67.9638 18.897C65.3917 18.907 63.3097 17.482 61.7435 15.05L60.8745 21.749C62.6597 23.22 64.947 24 67.9628 24C73.0773 24 76.2189 20.81 76.2189 16.385C76.2189 13.375 74.9846 11.442 71.8699 9.927L70.5432 9.249C68.6997 8.362 68.0738 7.874 68.0738 6.897C68.0738 5.841 68.9308 5.023 70.5792 5.023Z" fill="#163300"/>
  </g>
  <defs>
    <clipPath id="clip0_1317_1459">
      <rect width="98" height="24" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>
            <div className="self-stretch relative leading-[24px] font-medium">
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
      <div className="bg-white flex flex-col items-center justify-center py-16 px-4 text-13xl">
        <div className="w-[343px] flex flex-col items-start justify-start gap-[32px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[40px] font-semibold">
              Unlock Limitless Possibilities with Our New Card Solutions
            </div>
          </div>
          <div className="w-[343px] flex flex-col items-center justify-start gap-[8px] text-base text-white font-h50-16-bold">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center py-3 px-4 gap-[8px]">
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
            <div className="self-stretch flex flex-row items-center justify-center text-neutral-400">
              <div className="flex-1 rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-3 px-4 gap-[8px]">
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
      <div className="bg-white flex flex-row items-center justify-center pt-12 px-4 pb-10 text-left text-neutral-400 font-h50-16-bold border-t-[1px] border-solid border-neutral-1000">
        <div className="w-[343px] flex flex-col items-start justify-start gap-[64px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                  <div className="flex flex-col items-start justify-start py-1 px-0">
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
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-neutral-1300" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[64px] text-neutral-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
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
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <b className="self-stretch relative leading-[20px]">Legal</b>
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm">
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
                    <g clip-path="url(#clip0_1317_1723)">
                        <path d="M16.9307 4.24315C15.6557 3.66815 14.289 3.24315 12.8599 3.00148C12.8471 2.99904 12.834 3.00061 12.8222 3.00599C12.8104 3.01136 12.8006 3.02027 12.794 3.03148C12.619 3.33898 12.424 3.73981 12.2874 4.05648C10.7716 3.83001 9.23064 3.83001 7.71489 4.05648C7.56267 3.70553 7.39102 3.36334 7.20073 3.03148C7.19428 3.02013 7.18452 3.01102 7.17276 3.00537C7.16099 2.99971 7.14779 2.99777 7.13489 2.99982C5.70656 3.24148 4.3399 3.66648 3.06407 4.24231C3.05309 4.24692 3.04379 4.25477 3.0374 4.26481C0.444078 8.0773 -0.266754 11.7957 0.0824121 15.4673C0.0833837 15.4763 0.0861751 15.485 0.0906162 15.4929C0.0950574 15.5008 0.101055 15.5077 0.108245 15.5131C1.6219 16.6152 3.31018 17.4547 5.1024 17.9965C5.11489 18.0003 5.12826 18.0003 5.14074 17.9964C5.15323 17.9926 5.16426 17.985 5.1724 17.9748C5.5574 17.4581 5.90073 16.9123 6.19406 16.339C6.21156 16.3056 6.1949 16.2656 6.1599 16.2523C5.62157 16.0496 5.09997 15.8049 4.5999 15.5206C4.59091 15.5155 4.58334 15.5082 4.57786 15.4995C4.57239 15.4907 4.56917 15.4807 4.56851 15.4704C4.56785 15.46 4.56976 15.4497 4.57408 15.4403C4.57839 15.4309 4.58498 15.4227 4.59323 15.4165C4.69823 15.339 4.80323 15.2581 4.90323 15.1773C4.91223 15.17 4.92308 15.1654 4.93455 15.1639C4.94603 15.1625 4.95769 15.1642 4.96823 15.169C8.24072 16.639 11.7849 16.639 15.019 15.169C15.0296 15.1639 15.0414 15.162 15.053 15.1633C15.0647 15.1646 15.0757 15.1692 15.0849 15.1765C15.1849 15.2581 15.289 15.339 15.3949 15.4165C15.4032 15.4226 15.4099 15.4307 15.4144 15.44C15.4188 15.4493 15.4209 15.4596 15.4204 15.4699C15.4199 15.4802 15.4168 15.4903 15.4115 15.4991C15.4062 15.508 15.3988 15.5154 15.3899 15.5206C14.8915 15.8073 14.3732 16.0498 13.829 16.2515C13.8207 16.2545 13.8131 16.2593 13.8067 16.2655C13.8003 16.2717 13.7954 16.2792 13.7922 16.2875C13.7889 16.2958 13.7875 16.3047 13.788 16.3135C13.7884 16.3224 13.7908 16.3311 13.7949 16.339C14.0949 16.9115 14.4382 17.4565 14.8157 17.974C14.8236 17.9846 14.8345 17.9925 14.847 17.9967C14.8595 18.0009 14.8731 18.0011 14.8857 17.9973C16.681 17.457 18.372 16.6171 19.8874 15.5131C19.8948 15.508 19.901 15.5013 19.9056 15.4935C19.9102 15.4858 19.913 15.4771 19.914 15.4681C20.3307 11.2232 19.2157 7.5348 16.9565 4.26648C16.951 4.25586 16.9418 4.24758 16.9307 4.24315ZM6.68323 13.2315C5.69823 13.2315 4.88573 12.3407 4.88573 11.2482C4.88573 10.1548 5.6824 9.2648 6.68323 9.2648C7.69156 9.2648 8.49656 10.1623 8.48072 11.2482C8.48072 12.3415 7.68406 13.2315 6.68323 13.2315ZM13.329 13.2315C12.3432 13.2315 11.5315 12.3407 11.5315 11.2482C11.5315 10.1548 12.3274 9.2648 13.329 9.2648C14.3374 9.2648 15.1424 10.1623 15.1265 11.2482C15.1265 12.3415 14.3382 13.2315 13.329 13.2315Z" fill="#5A6475"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1317_1723">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
              </div>
            </div>
            <div className="relative leading-[20px] whitespace-pre-wrap inline-block w-[247px]">
              © 2023 Mode UI Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
