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
    title: "Pay-pal clone",
    description:
      "this is a stactic pay-pal clone website for banking and payment",
    img: "./pay-pal.png",
    link: "https://pay-pal-clone.onrender.com",
  },
  {
    id: 3,
    title: "andy-shop",
    description:
      "Welcome to Andy-shop were sales and buying are made seemlless for buying to order any get varieties of cloth in varieties of  colors",
    img: "./andy-shop.png",
    link: "https://andy-shop.onrender.com",
  },
  {
    id: 4,
    title: "Task-Management",
    description:
      "this is a task-management app that keeps track of your day to day tasks and activities and seprate your compleated task fro your uncompleated task to avoid repetetion of task ",
    img: "./task-management.png",
    link: "https://mytodoapp-qnde.onrender.com",
  },
  {
    id: 5,
    title: "Budget App",
    description:
      "this is a expense tracking website that keeps tracks of your income and expenses and gives you details amount spent and how much you have left",
    img: "./budgetIcon.png",
    link: "https://expense-tracker-zpyt.onrender.com",
  },
  {
    id: 6,
    title: "social-plus",
    description:
      "this is a social app that allow you to add up your friend and keeps information about them ",
    img: "./social-plus.png",
    link: "https://socialplusclass.onrender.com",
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
              <button>See Demo</button>
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
