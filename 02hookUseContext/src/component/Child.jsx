import React, { useEffect } from "react";

export default function Child(){
useEffect(()=>{
    console.log("Mounted");
    return ()=>{
        console.log("Unmounted");
        
    }
    
},[])



    return <h1>Child pass unmount</h1>
}