import React from 'react'
import Arrive3 from "../assets/hummingbird-cushion (3).jpg"

function FeaturedProduct() {
  return (
    <>
    <section className="featured-product">
    <div className="featured-text">
      <h2>
        <u>FEATURED PRODUCT</u>
      </h2>
    </div>
    <div className="featured-parent">
      <div className="feature-img">
        <img src={Arrive3} alt="" />
      </div>
      <div className="feature-text">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <br />
        $1000 <br />
        <br />
        <button className="button-type-2">ADD TO CART</button>
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam
          nam, vel laborum ad, deserunt quis in repellat quos ex recusandae!
          Laborum aspernatur autem similique.
        </p>
        <br />
        <br />
        <br />
        <ul>
          <li>Lorem, ipsum.</li>
          <br />
          <li>Lorem, ipsum.</li>
          <br />
          <li>Lorem, ipsum.</li>
          <br />
          <li>Lorem, ipsum.</li>
          <br />
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="quotes">
    <div className="quote-1">
      <div>
        <img src="quote.png" alt="" />
      </div>
      “There are no ugly women, there are just the ones who don't know how to
      make them look good.”
    </div>
  </section>
    </>
  )
}

export default FeaturedProduct