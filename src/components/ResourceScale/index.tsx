// import { useState } from 'react';
import './style.scss'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState, setTax } from '../../store/redusers/inputsStateSlice';

interface IPropResourceScale {
    imgHref: string
    name: string
    value: number,
    onChange: Function
}

function ResourceScale({ imgHref, name, value, onChange}:IPropResourceScale) {
    const inputsState = useSelector((state:RootState)=> state.inputsState)
    const dispatch = useDispatch()

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