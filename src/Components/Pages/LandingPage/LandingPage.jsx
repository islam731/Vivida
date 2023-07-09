import React from 'react'
import Home from './Home'
import Rewards from './Rewards'
import Socials from './Socials'
import WhyVivida from './WhyVivida'
function App() {

  return (
    <>
    <div class="overflow-hidden">
      <header>
      <Home/>
      </header>
      <section class="bg-blue-950 py-7">
        <Socials/>
      </section>
      <section>
        <Rewards/>
      </section>
      <section class="bg-blue-950">
        <WhyVivida/>
      </section>
     
    </div>
    
    </>
  )
}

export default App
