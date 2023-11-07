import React from 'react';
import SidebarComponent from './SidebarComponent';

function Sidebar() {
  return (
    <div className='vh-100 sidebar p-2'>
        <div className="m-2">
            <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
            <span className='brand-name fs-4'>HIGHTECH</span>
        </div>
        <hr className='text-dark'/>
        <div className="list-group list-group-flush">
            <SidebarComponent title={"Dashbord"} icon={"bi bi-speedometer2 fs-5 me-3"} />
            <SidebarComponent title={"Home"} icon={"bi bi-house fs-5 me-3"} />
            <SidebarComponent title={"Products"} icon={"bi bi-table fs-5 me-3"} />
            <SidebarComponent title={"Report"} icon={"bi bi-clipboard-data fs-5 me-3"} />
            <SidebarComponent title={"Customers"} icon={"bi bi-people fs-5 me-3"} />
            <SidebarComponent title={"Logout"} icon={"bi bi-power fs-5 me-3"} />
        </div>
    </div>
  )
}

export default Sidebar