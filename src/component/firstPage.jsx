import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
const FirstPage = () => {
    useEffect(()=>{
        gsap.to('.brand-name h4',{
            margin:0,
            duration:1
        })

},[])
  return (
    <div className='fpoverlay'>
        <div className='fpoverlay-content'>
           <div className='brand-name'>
            <h4>Porsche</h4>
           </div>
           <div className="modelname">
            <h1>911 Carrera 4S</h1>
           </div>
        </div>
    </div>
  )
}

export default FirstPage