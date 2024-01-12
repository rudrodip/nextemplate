"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  title: string;
  description?: string;
};

const motionProps = {
  initial: { x: -20, opacity: 0 },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 200,
    duration: 0.3,
    ease: [0.17, 0.67, 0.83, 0.67],
  },
};

const MdxHeaderAnimation = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <div className="my-2 lg:my-4">
      <motion.h1
        className="inline-block font-heading text-4xl tracking-tight lg:text-5xl"
        {...motionProps}
        animate={isInView ? { x: 0, opacity: 100 } : { x: -20 }}
        ref={ref}
      >
        {props.title}
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground"
        {...motionProps}
        animate={isInView ? { x: 0, opacity: 100 } : { x: -20 }}
        transition={{ delay: 0.1 }}
      >
        {props.description}
      </motion.p>
    </div>
  );
};

export default MdxHeaderAnimation;
