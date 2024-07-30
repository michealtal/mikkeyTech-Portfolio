import { motion } from "framer-motion";
import Typewriter from "../typewriter/Typewriter";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const sliderVarients = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};
const Hero = () => {
  const words = ["MERN Stack", "Full Stack", "Youtuber", "Tutor", "Seo-Agent"];

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Micheal Talabi</motion.h2>
          <motion.h1 variants={textVariants}>
            <Typewriter words={words} />
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="/Contact#Portfolio">See Latest Projects</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="/Contact#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVarients}
        initial="initial"
        animate="animate"
      >
        Content Creator And Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/avatar.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
