"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { type FormEventHandler, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "../icons/spinner/index";

const mailingListIds = 'cm2pqci2l01nb0ll26bgsbo1u';

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState("idle");

  const handleSubmit: FormEventHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    setFormState("loading");

    const formBody = `email=${encodeURIComponent(
      email,
    )}&mailingLists=${encodeURIComponent(mailingListIds)}`;

    // Change this URL to your own endpoint URL
    fetch(
      "https://app.loops.so/api/newsletter-form/cm0er1som003wevw31rmkqq4j",
      {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
      .then((blob) => blob.json())
      .then((res) => {
        if (!res?.success) {
          toast.error(
            res.message ?? "Something has error, please try again later.",
          );
          setFormState('idle')
          return;
        }
        if (res?.success) {
          setFormState("success");
          setEmail("")
          toast.success(
            "Thanks for your subscription! Hope you can learn something about animations :)",
          );
        }
      });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <fieldset className="relative flex w-full gap-2">
        <input
          autoComplete="off"
          className="subscribe h-[36px] w-full flex-1 rounded-lg bg-[#f2f2f2] px-2 font-sans text-sm outline-none outline-transparent transition-colors ease-out active:bg-white dark:bg-white/5 dark:shadow-none focus:outline-none dark:focus:ring-white/10 focus:ring-1 focus:ring-[#cacaca]"
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={!email}
          className="absolute top-1 right-1 flex h-[28px] w-20 items-center justify-center overflow-hidden rounded-[6px] bg-[#FF2574] py-1 font-medium text-white shadow-button transition-colors duration-200 disabled:cursor-not-allowed dark:bg-[#00C492] hover:bg-[#F0246D] hover:dark:bg-[#00B385] disabled:opacity-50"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0,
              }}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              key={formState}
            >
              {formState === "loading" ? (
                <Spinner size={14} color="rgba(255, 255, 255, 0.65)" />
              ) : (
                <span className="text-[13px] text-shadow-sm">Subscribe</span>
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </fieldset>
    </form>
  );
};

export default SubscriptionForm;
