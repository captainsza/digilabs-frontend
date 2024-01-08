import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import React from 'react';
const Hero =()=>{
    
  const words = ["Unleashing","the Next","Generation", "of Card", "Solutions"];
  return(
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
                          speed={300}
                          eraseSpeed={50}
                          typingDelay={100}
                          eraseDelay={50}
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
                  <motion.div className="flex-1 rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center p-4 gap-[8px]" whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                    <div className="relative leading-[20px] font-medium">
                      Unlock your Card
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.16663 10.0001H15.8333M15.8333 10.0001L9.99996 4.16675M15.8333 10.0001L9.99996 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </motion.div>
                </div>
              </div>
              <div className="relative text-sm leading-[20px] font-medium text-neutral-400 inline-block w-[343px]">
                *No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Hero;