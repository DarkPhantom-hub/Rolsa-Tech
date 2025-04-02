import React, { useEffect, useState } from 'react'
 import './ProjectNavigation.css'
 
 const ProjectNavigation = ({
     tabs,
     onChange,
 
 }) => {
     const [active,setActive] = useState("All");
     useEffect(()=> {
         onChange(active);
     },[active])
   return (
     <div className="project__navigation">
         {
             tabs.map((name,index)=> (
                 <button
                 onClick = {()=> {
                     setActive(name)
                 }}
                 className={`${active === name ? 'active' : ''}`}
                 key={index}
                 >
                     {name}
                 </button>
             ))
         }
     </div>
   )
 }
 
 export default ProjectNavigation