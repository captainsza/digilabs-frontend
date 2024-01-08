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
        
        <div className="bg-white box-border w-[375px] flex flex-col items-center justify-center p-2 text-xs text-neutral-200 font-h50-16-bold border-b-[1px] border-solid border-neutral-1000">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
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
              <div className="flex-1 relative leading-[16px] font-medium text-neutral-50 text-left">
                We are happy to announce that we raise $2 Million in Seed Funding
              </div>
            </div>
          </div>
        </div>
    );
}


export default Header;