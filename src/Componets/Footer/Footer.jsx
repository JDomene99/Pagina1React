import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='flex md:flex-row xs:flex-col flex-wrap mx-auto md:justify-between xs:justify-center xs:text-center  xs:px-6 sm:px-10 md:px-20 lg:px-28 xs:w-12/12  py-10 bg-[#a2d9ff]'>
      
     



      <h3 className='md:w-5/12 sm:w-12/12 lg:w-4/12'>Derechos reservados para Pokémon</h3>

      <h1 className='lg:w-4/12'>Realizado por Jose Domene</h1>
      
      <ul className='flex flex-row  xs:12/12 lg:w-4/12 flex-wrap gap-3 md:justify-end xs:justify-center'>
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