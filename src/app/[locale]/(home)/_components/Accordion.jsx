"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import AccordionArrow from "@/icons/AccordionArrow";

const Accordion = ({ title, text }) => {
  const [tabOpened, setTabOpened] = useState(false);
  const handleTab = () => {
    setTabOpened(!tabOpened);
  };

  return (
    <div
      className={`accordion ${tabOpened ? "opened" : ""}`}
      onClick={handleTab}
    >
      <div className="title">
        <h2>{title}</h2>
        <AccordionArrow />
      </div>
      <motion.div
        className="content"
        initial={{ height: 0 }}
        animate={{ height: tabOpened ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>{text}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
