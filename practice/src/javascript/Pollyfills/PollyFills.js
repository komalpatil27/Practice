import React, { StrictMode } from "react";
import ArrayPollyFills from "./ArrayPollyfills";
import StringPollyFill from "./StringPollyFills";
import PromisePollyFill from "./PromisePollyFill";

function PollyFill(){
    return(<>
    <ArrayPollyFills/>
    <StringPollyFill/>
    <PromisePollyFill/>
    </>)
}
export default PollyFill