import React from "react";
import Typed from "react-typed";


const Header = () => {

    
    return (
        <div className="header-wraper">
            <div className="container">
                <div className="content">
                    <div className="globe"></div>
                    <h2 className="frame-1">PMEL</h2>
                    <h2 className="frame-2">문화를 만듭니다.</h2>
                    <h2 className="frame-3">We Make Culture.</h2>
                </div>
            </div>
            <div className="main-info">
                {/* <Typed
                    className="typed-text"
                    strings={["PMEL", "문화를 만듭니다.", "PRODUCING", "RECORDING"]} // 문화를 만듭니다.
                    typeSpeed={80}
                    backSpeed={100}
                    loop
                /> */}
                
            </div>
        </div>
    );
}

export default Header;