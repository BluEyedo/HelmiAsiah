import { motion } from "framer-motion";
import React from "react";
import { GiVanillaFlower } from "react-icons/gi";

type Props = {};

const FloatingPetals = (props: Props) => {
  return (
    <>
      {/* Floating Petals */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`left-top-${i}`}
          animate={{ y: [0, 80, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed opacity-30"
          style={{ left: `${10 + i * 7}%`, top: `${20 + i * 5}%` }}
        >
          <GiVanillaFlower size={30} color="#f9a8d4" />
        </motion.div>
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`right-top-${i}`}
          animate={{ y: [0, 80, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed opacity-30"
          style={{ right: `${10 + i * 7}%`, top: `${20 + i * 5}%` }}
        >
          <GiVanillaFlower size={30} color="#f9a8d4" className="rotate-180" />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingPetals;
