"use client";

import React from "react";
import { motion } from "framer-motion";
import { InstagramLogoIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";

// # Assets for Interaction Design Challenge #1

// - Photograph: [Link](https://images.unsplash.com/photo-1723843038784-12e69916ac1e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
// - Photographer: Grigorii Shcheglov
// - Social: @shegiva on Unsplash
// - Metadata
//   - Location: Bogliasco, Italy
//   - Camera: FUJIFILM, X-T30 II

const CardReveal = () => {
  return (
    <motion.div
      className="relative h-[320px] w-[270px] overflow-hidden rounded-2xl"
      whileHover="hover"
      initial="initial"
    >
      <motion.img
        alt=""
        src="https://images.unsplash.com/photo-1723843038784-12e69916ac1e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        variants={{
          hover: { scaleY: 1.2 },
          initial: { scaleY: 1 },
        }}
        style={{
          transformOrigin: "center bottom",
        }}
        transition={{
          type: "keyframes",
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative inset-0 size-full object-cover"
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 flex flex-col items-start bg-black bg-opacity-70 text-dark-800 text-sm backdrop-blur-md"
        variants={{
          hover: { y: 0 },
          initial: { y: 76 },
        }}
        transition={{
          type: "keyframes",
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="p-4">
          <h3 className="font-medium text-white text-xl">Grigorii Shcheglov</h3>
          <p>@shegiva on Unsplash</p>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <div className="flex items-center space-x-2">
            <SewingPinFilledIcon className="h-4 w-4" />
            <p>Bogliasco, Italy</p>
          </div>
          <div className="flex items-center space-x-2">
            <InstagramLogoIcon className="h-4 w-4" />
            <p>FUJIFILM, X-T30 II</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardReveal;
