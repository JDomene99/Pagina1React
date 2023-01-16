import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Nav() {
  return (
    <ul className='flex flex-row flex-wrap gap-3 px-60'>
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
  )
}

export default Nav