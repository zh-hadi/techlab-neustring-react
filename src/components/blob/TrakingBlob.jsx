import React from "react";
import { motion } from "framer-motion";

const TrakingBlob = () => {
  const blobVariants = {
    initial: {
      d: "M174.5 -163.5C219.8 -129.2 245.9 -64.6 234.6 -11.3C223.3 42 174.6 83.9 129.2 123.7C83.9 163.6 42 201.3 -1.6 202.9C-45.3 204.6 -90.5 170.2 -140.5 130.3C-190.5 90.5 -245.3 45.3 -240.3 4.9C-235.4 -35.4 -170.7 -70.7 -120.7 -105C-70.7 -139.4 -35.4 -172.7 14.6 -187.3C64.6 -201.9 129.2 -197.8 174.5 -163.5",
    },
    animate: {
      d: [
        "M174.5 -163.5C219.8 -129.2 245.9 -64.6 234.6 -11.3C223.3 42 174.6 83.9 129.2 123.7C83.9 163.6 42 201.3 -1.6 202.9C-45.3 204.6 -90.5 170.2 -140.5 130.3C-190.5 90.5 -245.3 45.3 -240.3 4.9C-235.4 -35.4 -170.7 -70.7 -120.7 -105C-70.7 -139.4 -35.4 -172.7 14.6 -187.3C64.6 -201.9 129.2 -197.8 174.5 -163.5",
        "M103.2 -107.5C132.9 -73.5 155.4 -36.8 168.2 12.7C180.9 62.2 183.8 124.5 154.1 163.3C124.5 202.1 62.2 217.6 13.4 204.1C-35.4 190.7 -70.7 148.4 -98 109.5C-125.4 70.7 -144.7 35.4 -162.4 -17.7C-180 -70.7 -196.1 -141.4 -168.8 -175.4C-141.4 -209.4 -70.7 -206.7 -17 -189.7C36.8 -172.8 73.5 -141.5 103.2 -107.5",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <svg
        className="w-full max-w-[450px] h-auto"
        viewBox="0 0 447 461"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="paint0_linear_1_3339"
            x1="92.3803"
            y1="123.386"
            x2="542.689"
            y2="393.128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00D3EC" />
            <stop offset="1" stopColor="#009EE2" />
          </linearGradient>
        </defs>

        <g transform="translate(223.5 230.5)">
          <motion.path
            d="M174.5 -163.5C219.8 -129.2 245.9 -64.6 234.6 -11.3C223.3 42 174.6 83.9 129.2 123.7C83.9 163.6 42 201.3 -1.6 202.9C-45.3 204.6 -90.5 170.2 -140.5 130.3C-190.5 90.5 -245.3 45.3 -240.3 4.9C-235.4 -35.4 -170.7 -70.7 -120.7 -105C-70.7 -139.4 -35.4 -172.7 14.6 -187.3C64.6 -201.9 129.2 -197.8 174.5 -163.5"
            fill="url(#paint0_linear_1_3339)"
            variants={blobVariants}
            initial="initial"
            animate="animate"
          />
        </g>
      </svg>
    </div>
  );
};

export default TrakingBlob;
