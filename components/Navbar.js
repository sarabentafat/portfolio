import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs"
import { CgMail } from "react-icons/cg"


const Navbar = () => {
  return (
    <div className='p-10 text-[var(--txt-color)] bg-[var(--bg-color)]
   ' >
      <div className=' flex justify-between    '>
        <div className='flex flex-row '>
          <div className='font-bold m-7'>/About</div>
          <div className='font-bold m-7'>/projects</div>
          <div className='font-bold m-7'>/skills</div>
        </div>
        <div className=' flex text-[var(--icons-colr)]   m-7  '>
          <DiGithubBadge className='mx-5' />
          <BsLinkedin className='mx-5' />
          <CgMail className='mx-5' />
        </div>


      </div>
    </div>

    //   {/* scale =size of an element*/}
    //   {/* <motion.div
    // animate={{y:5}}
    // transition={{delay:1}}     
    //   >          */}
    //

  );
}

export default Navbar;