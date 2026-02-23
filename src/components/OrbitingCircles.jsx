import React from "react";
import { motion } from "framer-motion";

export const OrbitingCircles = ({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
}) => {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: radius * 2,
            height: radius * 2,
            pointerEvents: "none",
          }}
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: radius * 2,
          height: radius * 2,
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {children}
        </div>
      </motion.div>
    </>
  );
};
