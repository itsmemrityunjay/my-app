import React from 'react'
import Arrive1 from "../assets/hummingbird-cushion (1).jpg"
import Arrive2 from "../assets/hummingbird-cushion (2).jpg"


function NewArrival() {
  return (
    <>
    <section className="new-arrival">
    <div className="arrival-text">
      <h2>
        <u> NEW ARRIVAL</u>
      </h2>
    </div>
    <div className="arrival-1">
      <img src={Arrive1} alt="" /> Rick &amp; Morty T-Shirt
      <br />
      <br />
      $1000 <br />
      <br />
      <button className="button-type-2">ADD TO CART</button>
    </div>
    <div className="arrival-1">
      <img src={Arrive2} alt="" /> Rick &amp; Morty T-Shirt
      <br />
      <br />
      $1000 <br />
      <br />
      <button className="button-type-2">ADD TO CART</button>
    </div>
  </section>
    </>
  )
}

export default NewArrival