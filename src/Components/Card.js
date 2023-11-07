import React from 'react';

function Card({num, title, icon, id}) {
    return (
        <div className="col-md-3 p-1" >
            <div className="p-3 bg-light shadow-sm d-flex justify-content-around align-items-center rounded" id={id}>
                <div>
                    <h3 className='fs-2'>{num}</h3>
                    <h3 className='fs-5'>{title}</h3>
                </div>
                <i className={icon}></i>
            </div>
        </div>
    )
}

export default Card