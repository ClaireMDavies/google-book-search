import React from "react";
import "./headerStyle.css"


function Header(props) {
    return (
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        </div>
    );
}

export default Header;