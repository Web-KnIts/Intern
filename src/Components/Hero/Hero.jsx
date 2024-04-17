import React from 'react'
import "./hero.css"
function Hero() {
  return (
    <div className='Ncode__hero-container section__padding'>
        <div className='Ncode__hero-textcontainer'>
            <div className='Ncode__hero-container-heading'>Delivering AI and Blockchain solutions to drive business outcomes for startups and enterprises</div>
            <div className='Ncode__hero-conatiner-text'>We design, build, launch, and support digital products. Our team crafts solutions that power up your business, and also are flexible and scalable enough to meet future needs.</div>
            <button>Learn More</button>
        </div>
        <div className='Ncode__hero-imagecontainer'>
            <img src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDEzNDF8MHwxfHNlYXJjaHw1fHxBSXxlbnwxfHx8fDE3MDgyNjY2NzB8MA&ixlib=rb-4.0.3&q=85&w=793&dpr=2" alt="" />
        </div>
    </div> 
  )
}

export default Hero