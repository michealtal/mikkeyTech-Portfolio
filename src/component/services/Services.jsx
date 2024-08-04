import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const Technologies = [
  {
    id: "1",
    title: "html",
    img: "./html.png",
  },
  {
    id: "2",
    img: "./css.png",
    title: "css",
  },
  {
    id: "3",
    img: "./javaScript.png",
    title: "javascript",
  },
  {
    id: "4",
    img: "./typescript.png",
    title: "type script",
  },
  {
    id: "5",
    img: "./tailwind.png",
    title: "tailwind",
  },
  {
    id: "6",
    img: "./react.png",
    title: "react",
  },
  {
    id: "7",
    img: "./nodeJS.png",
    title: "node js",
  },
  {
    id: "8",
    img: "./express.png",
    title: "express",
  },
  {
    id: "9",
    img: "./mongoDB.png",
    title: "mongoDB",
  },
];
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
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>{" "}
            Technologies
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            <motion.b whileHover={{ color: "orange" }}> I Use</motion.b> In
            Building
          </h1>
          <button>WHAT WE USE?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={varients}>
        {Technologies.map((tech) => (
          <motion.div className="box">
            <img src={tech.img} alt="tech.title" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
