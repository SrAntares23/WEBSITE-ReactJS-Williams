import React from 'react'
import { useAppContext } from '../Utils/AppContext'
export default function Test2() {
    const { valueToPass } = useAppContext();
    console.log("Valor recibido:", valueToPass);
    return (
        <div>
            <p>Valor recibido: {valueToPass}</p>
            {/* ...otros elementos */}
        </div>)
}
