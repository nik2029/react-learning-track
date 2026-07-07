import React, { useContext } from "react";
import{nameCon,ageCon,emailCon,genderCon} from '../App'




export default function ChildC(){
const Name=useContext(nameCon);
const Age=useContext(ageCon);
const Email=useContext(emailCon);
const Gender=useContext(genderCon);
    return(
        <>
        <h1>My name is {Name} and my age {Age} also email is {Email} and gender {Gender}</h1>
        </>
    )
}