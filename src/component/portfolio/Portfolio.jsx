import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Beebah Radio App",
    description:
      "Beebah App is a radio app specialized in posting Beebah radio content ,selling of concert ticket, renting of instruments ,provision of ushers and Actiors",
    img: "./BeebahRadio.png",
    link: "https://beebahradiofn.onrender.com/?index",
  },
  {
    id: 2,
    title: "Medix",
    description:
      "Medix app is medical app also know as a mobile hospitle which made it easy for patients to reach out to doctors on time and even select doctors they want for their treatment",
    img: "./medix.png",
    link: "#",
  },
  {
    id: 3,
    title: "Dice Game",
    description:
      "Dice Game is a Dice game with Two dice which give you random number as you Click on a button and it decide the winner by the dice with the higest number it main purpose id to help siblings negotiate isuues and solve argument",
    img: "./diceGame.png",
    link: "#",
  },
  {
    id: 4,
    title: "Budget App",
    description:
      "music app is a random music app that on key press  it play the instrument or on mouse click it is fun fun kids and allows them to rest and pass time",
    img: "./budgetIcon.png",
    link: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ["-300%", "300%"]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank">
              <button>See demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
