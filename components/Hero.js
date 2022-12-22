import React from 'react';
import Image from 'next/image';
import me from '../assets/me.JPG';
import eclipse from '../assets/Ellipse.png'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="bg-[var(--bg-color)] 2xl:h-[350px] p-10  w-full">
            <Image src={eclipse} width={500} height={500} className='z-0 absolute right-0'/>
            <div className=" md:flex">
                <motion.div 
                animate={{y:0}}
                 className='text-[var(--txt-color)] ml-10'>
                    <div className='font-bold text-5xl mb-5'>Hello im <span className='text-[var(--icons-colr)]'> Sara</span></div>
                    <p className='text-2xl text-[var(--ntxt-color)]'>im computer science student,web devoloper,passionate about creative beautiful design and AI
                    </p>
                </motion.div>
                <div  className='mr-10'>
                    <Image src={me} alt="dev logo" width={500} height={800} className=' rounded-xl sm:p-1' />
                </div>
        


            </div>
        </div>
    );
}

export default Hero;