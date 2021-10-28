import React from "react";
import Typed from "react-typed";


const Header = () => {

    
    return (
        <div className="header-wraper">
            <div className="main-info">
                <Typed
                    className="typed-text"
                    strings={["PMEL", "MUSIC", "PRODUCING", "RECORDING"]}
                    typeSpeed={80}
                    backSpeed={100}
                    loop
                />
                
            </div>
        </div>
    );
}

export default Header;