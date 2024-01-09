import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';

const Navbar = () => {
  const [logoUrl, setLogoUrl] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get('/api/logoUrl');
        setLogoUrl(response.data.imageUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLogo();
  }, []);

  const MenuItem = ({ title, icon }) => (
    <div className="flex flex-col items-start justify-start p-2">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="text-gray-700 font-medium">{title}</div>
        {icon && icon}
      </div>
    </div>
  );

  const IconArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className="w-4 h-4 stroke-current"
    >
      <path
        d="M5.5 7.5L10.5 12.5L15.5 7.5"
        stroke="#363C46"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
              <motion.div className="rounded-lg bg-neutral-1200 flex flex-row items-center justify-center py-2 px-4 gap-[8px]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="relative leading-[20px] font-medium">Login</div>
                <img className="relative w-5 h-5 overflow-hidden shrink-0 object-cover" alt="" src="/images/log-in.png" />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end p-2">
            <img className="w-6 h-6 cursor-pointer" alt="" src="/images/menu.png" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
              <div className="fixed top-0 right-0 w-500 h-1000 bg-purple-100 z-50 flex flex-col items-start justify-start gap-4 mt-4 p-4 transition-all duration-300">
                <button onClick={() => setIsOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
                <MenuItem title="Card access" icon={<IconArrow />} />
                <MenuItem title="Banking" />
                <MenuItem title="Processing" />
                <MenuItem title="About" />
                <MenuItem title="Carrier" />
                <MenuItem title="Contact" />
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
