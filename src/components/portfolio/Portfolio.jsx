import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Urban Haven",
    img: "/Zaph.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.",
  },
  {
    id: 2,
    title: "MUTC Tech Club",
    img: "/Zaph.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.",
  },
  {
    id: 3,
    title: "Zaph Tours",
    img: "/Zaph.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.",
  },
  {
    id: 4,
    title: "Gamer Hub",
    img: "/Zaph.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.",
  },
  {
    id: 5,
    title: "Connectify",
    img: "/Zaph.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="portfolio-container">
        <div className="portfolio-wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
