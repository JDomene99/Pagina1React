import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='flex flex-row flex-wrap mx-auto justify-between xs:px-6 sm:px-10 md:px-20 lg:px-28  py-10 bg-[#a2d9ff]'>
      
      <div className='border-t-2 w-full pt-6'>

      </div>

      <h3 className='w-5/12'>Derechos reservados para Nintendo y Pokémon</h3>

      <ul className='flex flex-row  w-5/12 flex-wrap gap-3 justify-end'>
        <li>
            <a href="https://github.com/JDomene99" target="_blank" className='hover:text-gray-600'>
                <GitHubIcon/>
            </a>
        </li>

        <li> 
            <a href="https://www.linkedin.com/in/jose-domene-4591ba201/" target="_blank" className='hover:text-gray-600'>
                <LinkedInIcon/>
            </a>
        </li>
      </ul>



    </footer>
  )
}

export default Footer