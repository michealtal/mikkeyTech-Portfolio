import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const varients = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={varients}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={varients}>
        <motion.p>
          i focus on creating solutions and making <br />
          existance easy ans fun
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varients}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            {" "}
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={varients}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
            placeat rem maiores asperiores quibusdam suscipit ipsa nesciunt
            cupiditate tempore!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
            placeat rem maiores asperiores quibusdam suscipit ipsa nesciunt
            cupiditate tempore!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Web App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
            placeat rem maiores asperiores quibusdam suscipit ipsa nesciunt
            cupiditate tempore!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Strategies</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
            placeat rem maiores asperiores quibusdam suscipit ipsa nesciunt
            cupiditate tempore!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
