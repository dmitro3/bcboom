import React from "react";
import "./Switch.css";

const Switch = (props) => {
    return (
        <>
            <input
                checked={props.isOn}
                onChange={props.handleToggle}
                type="checkbox"
                id={"react-switch-new"}
                className="react-switch-checkbox"
            />
            <label
                style={{ background: props.isOn && props.onColor }}
                className="react-switch-label"
                htmlFor={"react-switch-new"}
            >
                <span className={"react-switch-button"} />
            </label>
        </>
    );
};

export default Switch;
