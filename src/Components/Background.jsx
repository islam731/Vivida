import React from 'react'
import './Navbar.css'

function Background(props) {
  let videoElement = document.getElementById("video");
  return (
    <>
    <div class="absolute w-full overflow-hidden h-[39rem] md:h-[45rem]">
      <video className={props.class} autoPlay muted loop plays-inline>
          <source src={props.video} type="video/mp4" />
      </video>
      <img src= {props.black} class={props.class2}/>
      </div>
    </>
  )
}

export default Background