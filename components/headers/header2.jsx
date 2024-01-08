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
        <div className="bg-white box-border w-[768px] flex flex-col items-center justify-center py-2 px-8 text-xs text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[16px]">
          <motion.div
            className="rounded-221xl bg-neutral-1300 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-neutral-1000"
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