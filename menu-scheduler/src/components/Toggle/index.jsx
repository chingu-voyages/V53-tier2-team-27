import React from "react";
import "./styles.css";

const ToggleSwitch = ({ label }) => {
    return (

        <div className="toggle-container">
            {label}{''}
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle"
                    name={label}
                    id={label}
                />
                <label className="toggle-label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;