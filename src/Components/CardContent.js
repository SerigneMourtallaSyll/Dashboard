import React from 'react';
import Card from './Card';
import { tab } from './Utils';


function CardContent() {
    return (
        <div className="container-fluid px-4 m-0 p-3" id='content'>
            <div className="row g-3">
                {tab.map((elem) => (
                    <Card {...elem} key={elem.id}/>    
                ))}
            </div>
        </div>
    )
}

export default CardContent