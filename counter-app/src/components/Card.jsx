import React from "react";
 function Card({userName,age,Phn}){
    return(
             <div className="flex flex-col bg-gray-400 items-center gap-6 p-7 md:flex-row md:gap-8 rounded-5xl mb-3">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/6259470/pexels-photo-6259470.jpeg" />
  </div>
  <div className="flex flex-col gap-2  items-center md:items-start">
    <span className=" text-2xl font-medium">Name: {userName}</span>
    <span className=" text-2xl font-medium">Age: {age}</span>
    <span className="text-2xl font-medium">Phone:{Phn}</span>
    
    
    
  </div>
</div>

    )

 }
 export default Card