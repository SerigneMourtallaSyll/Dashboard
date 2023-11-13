import React from 'react';
import SidebarComponent from './SidebarComponent';
import { menu } from './Utils';


function Sidebar() {
  return (
    <div className='vh-100 sidebar p-2'>
        <div className="m-2">
            <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
            <span className='brand-name fs-4'>HIGHTECH</span>
        </div>
        <hr className='text-dark'/>
        <div className="list-group list-group-flush">
          {menu.map((elem, index) => (
            <SidebarComponent {...elem} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Sidebar