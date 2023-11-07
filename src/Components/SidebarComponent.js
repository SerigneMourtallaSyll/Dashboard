import React from 'react'

function SidebarComponent({title, icon}) {
  return (
    <a className='list-group-item py-4'>
        <i className={icon}></i>
        <span className='fs-5'>{title}</span>
    </a>
  )
}

export default SidebarComponent