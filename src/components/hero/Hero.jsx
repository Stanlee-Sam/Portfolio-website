import './hero.scss'
import { motion } from "framer-motion";

const textVariants = {
    initial : {
        x : -500,
        opacity: 0,
    },
    animate : {
        x : 0,
        opacity: 1,
        transition : {
            duration : 1,
            staggerChildren: 0.1,
        }
    }

}
const sliderVariants = {
    initial : {
        x : 0,
        
    },
    animate : {
        x : "-220%",
        
        transition : {
            repeat : Infinity,
            repeatType: "mirror",
            duration : 20,
        }
    }

}
const Hero = () => {
    return ( 
        <div className="hero">
            <div className="hero-wrapper">
                <motion.div className="text-container" variants = {textVariants} initial  = "initial" animate = "animate">
                <motion.h2 variants = {textVariants}>Stanley Amunze</motion.h2>
                <motion.p variants = {textVariants}>Web developer and UI designer.</motion.p>
                <motion.div className="buttons" variants = {textVariants}>
                    <motion.button variants = {textVariants}>See the latest work</motion.button>
                    <motion.button variants = {textVariants}>Contact Me</motion.button>
                </motion.div>
                </motion.div>
                <motion.div className = "slidingTextContainer" variants = {sliderVariants} initial = "initial" animate = "animate">
                    Stanlee Sam
                </motion.div>
                <div className="image-container" >
                    <img src="../../src/assets/hero.png" alt="" />
                </div>
            </div>
        </div>
 
    );
}
 
export default Hero;