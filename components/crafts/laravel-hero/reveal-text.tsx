"use client";
import React from "react";
import { motion } from "framer-motion";

const LaravelRevealText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.9 }}
      className="relative rounded-[4px] bg-[#fff0ef] px-2"
    >
      <span className="bg-gradient-to-r from-[#ff2d20] to-[#ff9820] bg-clip-text font-medium text-sm text-transparent">
        Early Access Late 2024
      </span>
      <motion.span
        className="absolute inset-y-0 right-0 h-full bg-gradient-to-r from-transparent to-[48px] to-light-200 dark:to-dark-200"
        initial={{ width: 174 }}
        animate={{ width: 0 }}
        transition={{
          type: "keyframes",
          ease: [0.4, 0, 0.2, 1],
          duration: 1,
          delay: 0.9,
        }}
      />
    </motion.div>
  );
};

export default LaravelRevealText;
