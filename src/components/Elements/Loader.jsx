import React from "react";
import LogoRedondo from '../../assets/img/LogoRedondo.jpeg'


const Loader = () => {
    return (
        <>


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="centered-div">
                        <div className="spinner">
                            <span>Cargando...</span>
                            <div className="half-spinner"></div>
                        </div>
                </div>
            </div>





        </>


    );
};

export default Loader;