"use client";

import React from "react";
import { motion } from "framer-motion";

const LaravelTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="font-medium text-4xl text-light-1000 dark:text-dark-1000"
    >
      The Future of Shipping
    </motion.h1>
  );
};

export default LaravelTitle;
