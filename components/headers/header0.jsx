import React from 'react';
import { motion } from 'framer-motion';
const Header = () => {
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
    return (
    <div className="bg-white box-border w-[1440px] flex flex-col items-center justify-center p-2 text-xs text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="w-[1216px] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-center gap-[16px]">
          <motion.div
            className="rounded-221xl bg-neutral-1300 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-neutral-1000 hover:bg-neutral-1300 cursor-pointer transition-colors duration-200"
            variants={variants}
            initial="animate"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
    );
}


export default Header;