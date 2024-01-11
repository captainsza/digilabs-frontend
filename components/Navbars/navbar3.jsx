import React, {useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';
const Navbar = () => {
  const [logoUrl, setLogoUrl] = useState();

  useEffect(() => {

    const fetchLogo = async () => {
  try {
    const response = await axios.get('/api/logoUrl');
    
    setLogoUrl(response.data.imageUrl);
  } catch (error) {
    
  }
};

    fetchLogo();
  }, []);
    return (
        <div className="bg-white box-border w-[1920px] h-20 flex flex-col items-center justify-center py-5 px-20 text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="h-10 flex flex-col items-end justify-between py-0 px-8 box-border">
          <div className="w-[1216px] flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-center p-2">
              <div className="flex flex-col items-start justify-start py-1 px-2">
                <img
                  className="relative w-[84px] h-4 object-cover"
                  alt=""
                  src={logoUrl}
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
                <Link href="/Admin" passHref style={{ textDecoration: 'none' }}>
                  <motion.div
                    className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px] hover:bg-neutral-1300 cursor-pointer transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    
                  >
                    <div className="relative leading-[20px] font-medium">
                      Admin
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center text-neutral-400">
              <div className="flex flex-row items-center justify-center">
                <motion.div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px] hover:bg-neutral-1300 cursor-pointer transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative leading-[20px] font-medium">
                    Login
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5" stroke="#5A6475" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
};

export default Navbar;
