import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Podedex from "./podedex.png";

function Nav() {
  return (
    <nav className='flex flex-row flex-wrap justify-between py-4 align-middle sm:mx-10 md:mx-20 lg:mx-28'>
        
        <div className='sm:w-2/12 md:w-2/12 lg:w-1/12'>
            <img 
            src={Podedex} alt="" />
        </div>

        <ul className='flex flex-row flex-wrap gap-3  justify-end py-5'>
            <li className='my-auto'>
                <a href="https://github.com/JDomene99" target="_blank" className='hover:text-gray-600 '>
                    <GitHubIcon/>
                </a>
            </li>

            <li className='my-auto'> 
                <a href="https://www.linkedin.com/in/jose-domene-4591ba201/" target="_blank" className='hover:text-gray-600'>
                    <LinkedInIcon/>
                </a>
            </li>
        </ul>
    </nav>
    
  )
}

export default Nav