import React from 'react'
import { SiCodeforces } from "react-icons/si";

function Icon(props) {
  return (
    <>
    <section class="delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400">
    <div>
      <img src={props.src} class="h-32 mx-auto"/>
    </div>
    <div>
      <h1 class="text-3xl mx-auto my-10 text-center">{props.text}</h1>
    </div>
    </section>
    
    </>
  )
}

export default Icon