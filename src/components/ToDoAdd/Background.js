import React , {useEffect} from 'react'
import "./style.css";

const Background = ({ setShow }) => {
    useEffect(() => {
        const backgroundEl = document.querySelector("#add-background");
      
        backgroundEl.addEventListener("click", (e) => {
         if (e.target.id === "add-background") setShow(false);
        });
       });
  return (
    <div className='mx-auto add-background' id='add-background'></div>
  )
}

export default Background