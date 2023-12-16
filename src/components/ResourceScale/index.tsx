// import { useState } from 'react';
import './style.scss'

interface IPropResourceScale {
    imgHref: string
    name: string
    value: number,
    onChange: Function
}

function ResourceScale({ imgHref, name, value, onChange }:IPropResourceScale) {

    return (
        <div className="resource-scale">
            <div className="res-info">
                <img src={imgHref} alt="" />
                <br />
                <span>{name}</span>
            </div>
            <input type="range" min="-100" max="100" value={value} onChange={e =>{ onChange(+e.target.value)}} />
            <div className='percentRes'>{value}%</div>
        </div>
    );
}

export default ResourceScale;