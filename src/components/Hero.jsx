import React from 'react'
import HeroImg from "../assets/384f8bc5ae3475329eefa64c6faab87d3456ec83_slide9-1.jpg"

function Hero() {
  return (
    <>
    <section className="hero">
    <a href="#">
      <img
        src={HeroImg}
        alt="Shop Now"
      />
    </a>
  </section>
    </>
  )
}

export default Hero