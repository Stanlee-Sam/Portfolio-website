import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on making your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="./People2.jpeg" alt="" />
          <h1>
            <b className="bold">Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b className="bold">For Your</b> Business.
          </h1>
          <button> What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
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
