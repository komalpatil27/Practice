import React from "react";

function Toast(props){
    return(
        <div className="toast" >
            <span>🦄 Wow so easy!'</span>
            <button role="close" className="closebutton" style={{marginLeft : '30px'}} onClick={props.closeOnClick}>close</button>
        </div>
    )
}

export default Toast