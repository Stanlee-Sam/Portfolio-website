import './portfolio.scss'
import {motion, useScroll, useSpring} from 'framer-motion'
import { useRef } from 'react'

const items = [
    {
        
            id : 1,
            title : 'Urban Haven',
            img : '/Zaph.jpeg',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.',
        
        
    },
    {
        id : 2,
        title : 'MUTC Tech Club',
        img : '/Zaph.jpeg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.',
    },
    {
        id : 3,
        title : 'Zaph Tours',
        img : '/Zaph.jpeg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.',
    },
    {
        id : 4,
        title : 'Gamer Hub',
        img : '/Zaph.jpeg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.',
    },
    {
        id : 5,
        title : 'Connectify',
        img : '/Zaph.jpeg',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis non velit finibus, vel tristique neque placerat. Sed vitae metus sed nunc condimentum luctus.',
    }
    
    
    
    

]

const Single = ({ item}) => {
    return (
        <section>
            {item.title}

        </section>
    )
}
const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress} = useScroll({ target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness : 100,
        damping : 30,
    })
  return (
    <div className='portfolio'>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
      {items.map(item => (
        <Single item = {item} key = {item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
