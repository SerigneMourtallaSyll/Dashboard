import React from 'react';

function Template(props) {
    
  return (
    <div className="container-fluid nin-vh-100">
      <div className='row'>
        {props.toggle && <div className='col-4 col-md-2 vh-100 position-fixed m-0 p-0' style={{backgroundColor: props.sidebarBg}}>
          {props.sidebar}      
        </div>}
        {props.toggle && <div className='col-4 col-md-2'></div>}
        <div className='col p-0 m-0'>
          {props.navbar}
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Template