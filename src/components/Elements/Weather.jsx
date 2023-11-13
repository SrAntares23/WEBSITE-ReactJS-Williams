import React from 'react'
import { useAppContext } from '../../Utils/AppContext'
import '../../style/wheather/weather.css'
export default function Weather() {


    return (

        <div >
            <div className="clima-contenedor ">
                <div className="estado">Estado</div>
                <div className="temp">Temp</div>
                <div className="max-min container">
                    <span className="max-temp">temp</span>
                    <span className="min-temp">temp</span>
                </div>
            </div>
            <div className="location-contenedor">
                <div className="location">
                    El salvador
                </div>
                {/* <div className="fecha">{fechaFunc(new Date())}</div>  */}
            </div>
        </div>

    )
}
