import React, {useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
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
        <div className="bg-white flex flex-col items-center justify-start py-5 px-4 text-neutral-400 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="w-[343px] flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start p-2">
            <div className="flex flex-col items-start justify-start py-1 px-2">
              <img
                className="relative w-[84px] h-4 object-cover"
                alt=""
                src={logoUrl ? logoUrl : '/images/Vector.jpg'}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-row items-center justify-center">
                <motion.div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px]"whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <div className="relative leading-[20px] font-medium">
                    Login
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/images/log-in.png"
                  />
                </motion.div>
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
        );
};

export default Navbar;
