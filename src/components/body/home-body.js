import React from 'react';
import { motion } from 'framer-motion';

export default function HomeBody() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/home-bg-design.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full md:min-h-screen lg:h-screen flex flex-col lg:flex-row px-10 lg:px-52 pt-28 lg:pt-0">
        <div className="w-full lg:h-full m-auto flex justify-center items-center">
          <div className="lg:w-full h-auto">
            {/* Animated "Hello 👋" */}
            <motion.h1
              className="text-3xl md:text-7xl text-red-500 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hello 👋
            </motion.h1>

            {/* Animated "I'm Ravindu" */}
            <motion.h1
              className="text-5xl md:text-8xl font-bold flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                I'm&nbsp;
              </motion.span>
              <motion.span
                className="text-red-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Ravindu
              </motion.span>
            </motion.h1>

            {/* Animated "I'm a Software Developer" */}
            <motion.h1
              className="text-2xl md:text-5xl flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                I'm a&nbsp;
              </motion.span>
              <motion.span
                className="text-stone-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                Software Developer
              </motion.span>
            </motion.h1>

            {/* Contact Me Button */}
            <motion.a
              href="#contact"
              className="mt-10 mb-10 text-sm md:text-lg lg:mb-0 px-5 py-3 md:px-12 md:py-4 bg-red-500 rounded-2xl text-white font-bold inline-block shadow-lg hover:bg-red-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <i className="ri-phone-fill align-middle"></i> &nbsp; Contact Me
            </motion.a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-full lg:h-full lg:flex float-left">
          <div className="flex justify-center lg:justify-end items-end w-full">
            <motion.img
              className="h-auto w-auto md:h-5/6"
              src="./images/profile-card.png"
              alt="Profile Card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}