import React from 'react'

function Background() {
  return (
    <>
    <video className="absolute" autoPlay muted loop>
          <source src="../../Home-Page-Banner.mp4" type="video/mp4" />
      </video>
      <img src= "../../black.webp" class="absolute w-full overflow-hidden opacity-70"/>
    </>
  )
}

export default Background