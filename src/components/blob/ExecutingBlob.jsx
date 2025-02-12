import React from "react";
import { motion } from "framer-motion";

const ExecutingBlob = () => {
  const blobVariants = {
    initial: {
      d: "M340.853 60.1307C309.593 -1.68739 231.198 15.0748 205.839 34.2379C130.812 -27.4399 75.7613 8.68238 37.9059 38.2304C0.0504487 67.7784 -8.82117 132.303 10.9015 162.223C57.6843 233.193 67.4149 224.148 18.6698 260.616C-30.0754 297.084 66.3869 469.24 197.331 378.614C282.974 319.341 353.874 375.78 384.871 330.897C415.868 286.015 455.276 138.452 399.296 135.59C343.317 132.728 379.927 137.403 340.853 60.1307Z",
    },
    animate: {
      d: [
        "M340.853 60.1307C309.593 -1.68739 231.198 15.0748 205.839 34.2379C130.812 -27.4399 75.7613 8.68238 37.9059 38.2304C0.0504487 67.7784 -8.82117 132.303 10.9015 162.223C57.6843 233.193 67.4149 224.148 18.6698 260.616C-30.0754 297.084 66.3869 469.24 197.331 378.614C282.974 319.341 353.874 375.78 384.871 330.897C415.868 286.015 455.276 138.452 399.296 135.59C343.317 132.728 379.927 137.403 340.853 60.1307Z",
        "M310.4 50.1C280.9 -20.2 230 5 200.5 35.1C150.8 -5.5 70.3 15 40.2 50C10.2 85 -20 120 0 165C50 200 100 200 30 240C-40 280 70 450 200 360C300 300 340 350 370 320C400 290 420 140 380 135C340 130 370 150 310.4 50.1Z",
        "M320 80C300 -5 230 20 200 40C140 0 80 20 40 60C0 100 -30 140 10 170C60 200 110 220 40 260C-30 300 70 460 200 360C300 280 350 320 390 300C420 280 450 160 400 150C350 140 370 160 320 80Z",
      ],
      transition: {
        duration: 3, // Total duration of the animation
        repeat: Infinity, // Loop the animation indefinitely
        repeatType: "reverse", // Reverses the motion back to the initial position
        ease: "easeInOut", // Smooth easing for both directions
      },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <svg
        className="w-full max-w-[400px] h-auto"
        viewBox="0 0 428 405"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="gradient1"
            x1="-0.0230699"
            y1="89.2883"
            x2="384.668"
            y2="331.382"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7F7FD5" />
            <stop offset="0.5" stopColor="#86A8E7" />
            <stop offset="1" stopColor="#91EAE4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M340.853 60.1307C309.593 -1.68739 231.198 15.0748 205.839 34.2379C130.812 -27.4399 75.7613 8.68238 37.9059 38.2304C0.0504487 67.7784 -8.82117 132.303 10.9015 162.223C57.6843 233.193 67.4149 224.148 18.6698 260.616C-30.0754 297.084 66.3869 469.24 197.331 378.614C282.974 319.341 353.874 375.78 384.871 330.897C415.868 286.015 455.276 138.452 399.296 135.59C343.317 132.728 379.927 137.403 340.853 60.1307Z"
          fill="url(#gradient1)"
          variants={blobVariants}
          initial="initial"
          animate="animate"
        />
      </svg>
    </div>
  );
};

export default ExecutingBlob;
