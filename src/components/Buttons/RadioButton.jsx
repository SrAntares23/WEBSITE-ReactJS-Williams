import React, { useState } from 'react'
import '../../style/blogStyles/a.css'
export default function RadioButton({ initialChecked, onChange }) {

    // const [isChecked, setIsChecked] = useState(initialChecked)


    return (
        <div className="jeg_nav_item jeg_dark_mode">
            <label className="dark_mode_switch">
                <input type="checkbox" className="jeg_dark_mode_toggle"
                    checked={initialChecked}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
