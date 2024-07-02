
import { HashLink } from 'react-router-hash-link';
import {navLinks} from '../constant';

import { useState } from "react";

import { close, logo, menu } from "../assets";




const navbar = () => {

  const [active,setActive]=useState("Home");
  const [toggle,setToggle]=useState(false);
  console.log('hey');

  return (
    <>
    
    <div className="h-[70px] flex justify-between pt-5 w-full">
        <img src={logo} alt="hooBank" className="h-[32px] w-[124px]"/>
        <div className='md:flex hidden flex-1 justify-end '>
            <ul className=" list-none flex mt-1 ">
                {navLinks.map((navlink,index)=>(
                  <li key={index} className={` ${ active===navlink.title ? "text-white" : "text-dimWhite"}
                   ${index=== navlink.length-1 ? "mr-0" : "mr-10"}  font-poppins font-normal cursor-pointer text-[16px]`}>
                    <HashLink to={`#${navlink.id}`}  onClick={ ()=>setActive(navlink.title)} >{navlink.title}</HashLink>
                    
                  </li>
                )
                )}
            </ul> 
            
        </div> 

        <div className='md:hidden flex justify-end items-center flex-1 '>
          <img src= {`${!toggle ? menu : close}`} className="h-[25px] w-[25px] relative mb-2" alt="close" 
           onClick={()=>setToggle((prevstat)=>(!prevstat))}/>
          <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-5 bg-black-gradient-2 rounded-[10px] py-4 px-8 `}>
            <ul className=" list-none flex flex-col text-[17px] z-[1]  items-center justify-center sidebar ">
                {navLinks.map((navlink,index)=>(
                  <li key={index} className={` ${ active===navlink.title ? "text-white" : "text-dimWhite"}
                    list-none p-2`}>
                    <HashLink to={`#${navlink.id}`}  onClick={ ()=>setActive(navlink.title)} >{navlink.title}</HashLink>
                  </li>
                )
                )}
            </ul> 
          </div>

        </div>

        
    </div>

    


    </>
  )
}

export default navbar 

