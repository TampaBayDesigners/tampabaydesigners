import React from 'react'
import Link from 'next/link'

const NavItem = ({ href, children, ...props }) => {

  let isActive = null
  if(props.state === 'active') {
    isActive = `bg-white dark:bg-opacity-10 shadow`
  } else {
    isActive = `hover:bg-black hover:bg-opacity-5 dark:hover:bg-white dark:hover:bg-opacity-5 dark:hover:text-white`
  }

  return (
      <Link as={props.as} href={href}>
        <a>
          <div className={`font-medium transition w-full ${props.center ? 'flex justify-center items-center' : ' block text-left px-4'} pt-3 pb-3 rounded-md ${isActive}`}>
            {children}
          </div>
        </a>
      </Link>
  )
}

export default NavItem