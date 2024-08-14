import "./services.scss";
import {  motion } from "framer-motion";

const variants = {
  initial : {
    x : -500,
    y : 100,
    opacity: 0,
  },
  animate : {
    x : 0,
    opacity : 1,
    y : 0,
    transition : {
      duration : 1,
      staggerChildren : 0.1
    }
  }
}
const Services = () => {
  return (
    <motion.div className="services" variants = {variants} initial = "initial" whileInView = "animate">
      <motion.div className="textContainer" variants = {variants}>
        <p>
          I focus on making your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants = {variants}>
        <div className="title">
          <img src="./People2.jpeg" alt="" />
          <h1>
            <motion.b className="bold" whileHover = {{color:"Orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b className="bold"whileHover = {{color:"Orange"}}>For Your</motion.b> Business.
          </h1>
          <button> What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants = {variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ipsam expedita quia? Provident veniam rem, magni odit voluptatem
            earum inventore iusto quod minus qui deleniti culpa amet voluptates
            numquam sint.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ipsam expedita quia? Provident veniam rem, magni odit voluptatem
            earum inventore iusto quod minus qui deleniti culpa amet voluptates
            numquam sint.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ipsam expedita quia? Provident veniam rem, magni odit voluptatem
            earum inventore iusto quod minus qui deleniti culpa amet voluptates
            numquam sint.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
