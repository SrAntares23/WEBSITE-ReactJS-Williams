import React, { useState } from 'react'
import { useAppContext } from '../Utils/AppContext'
import { Link } from 'react-router-dom';

export default function Test1() {
    const { setValueToPass } = useAppContext();

    const handleChange = (event) => {
        setValueToPass(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder='SASD' />
            <Link to='/test2'>
                <button >click</button>
            </Link>

        </div>
    );
};

