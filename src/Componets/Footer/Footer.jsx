import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className='flex flex-row flex-wrap justify-between px-60'>
      <h3>Derechos reservados para Nintendo y Pokémon</h3>

      <ul className='flex flex-row flex-wrap gap-3'>
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