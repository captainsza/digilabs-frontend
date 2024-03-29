import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import React, {useState , useEffect} from 'react';
import axios from 'axios';

const Hero = () => {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
  
    const fetchButtonText = async () => {
      try {
        const response = await axios.get('/api/buttonText'); 
        setButtonText(response.data.buttonText);
      } catch (error) {
        console.error(error);
      }
    };

    fetchButtonText();
  }, []); 
  const words = ["Unleashing","the Next","Generation", "of Card", "Solutions"];
  return(
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
                  <motion.div className="rounded-lg bg-pri-purple-400 flex flex-row items-center justify-center p-4 gap-[8px] hover:bbg-pri-purple-700 cursor-pointer transition-colors duration-200"whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
                    <div className="relative leading-[20px] font-medium">
                    {buttonText || "Unlock your Card"}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M4.66666 10.0001H16.3333M16.3333 10.0001L10.5 4.16675M16.3333 10.0001L10.5 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </motion.div>
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
  );
}
export default Hero;