import React, { useState } from "react";
import Child from "./Child";



export default function UnmountFeature(){

const[show,setShow]=useState(true);    
    return(
        <>
        <button onClick={()=>setShow(!show)}>taggle</button>
        {show && <Child/>}
        </>
    )
}