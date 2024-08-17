import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
      clipPath: "circle(1500px at 87% 8%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 87% 8%)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <ToggleButton setOpen={setOpen} />
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
