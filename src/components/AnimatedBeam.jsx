import React, { useRef } from "react";
import { motion } from "framer-motion";

export const Beam = ({ fromRef, toRef, containerRef, duration = 2, delay = 0, color = "#8b5cf6" }) => {
  const [path, setPath] = React.useState("");

  React.useLayoutEffect(() => {
    const updatePath = () => {
      if (!fromRef.current || !toRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const startX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const startY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const endX = toRect.left + toRect.width / 2 - containerRect.left;
      const endY = toRect.top + toRect.height / 2 - containerRect.top;

      const controlX = (startX + endX) / 2;
      setPath(`M ${startX} ${startY} Q ${controlX} ${startY} ${endX} ${endY}`);
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial updates with delays to catch layout settling after animations
    updatePath();
    
    // Animation loop for first 2 seconds to catch fluid entrance animations
    let startTimestamp = Date.now();
    const animate = () => {
      updatePath();
      if (Date.now() - startTimestamp < 2000) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);

    const timeout1 = setTimeout(updatePath, 100);
    const timeout2 = setTimeout(updatePath, 500);
    const timeout3 = setTimeout(updatePath, 1000);

    window.addEventListener("resize", updatePath);
    window.addEventListener("scroll", updatePath);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
      window.removeEventListener("scroll", updatePath);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [fromRef, toRef, containerRef]);

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <path
        d={path}
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="2"
      />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.2 }}
        animate={{ 
          pathLength: [0, 0.3, 0.3, 0],
          pathOffset: [0, 0, 1, 1],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      />
    </svg>
  );
};

export const CircleIcon = React.forwardRef(({ icon: Icon, color = "var(--accent-color)" }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
        fontSize: "1.2rem",
        zIndex: 2,
        boxShadow: `0 0 20px ${color}20`,
        backdropFilter: "blur(4px)",
      }}
    >
      {Icon}
    </div>
  );
});
