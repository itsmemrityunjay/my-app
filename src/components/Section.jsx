import React from 'react'

import "../App.css"

function Section() {
  return (
    <>
    <section className="return-policy">
    <div className="policy-parent flex justify-around">
      <div className="policy">
        {/* <img src={SecImg1} alt="" /> */}
        <h3>30 DAYS RETURN</h3>
        <br />
        Simply return it within 30 days for an exchange
      </div>
      <div className="policy">
        {/* <img src={SecImg2} alt="" /> */}
        <h3>30 DAYS RETURN</h3>
        <br />
        Simply return it within 30 days for an exchange
      </div>
      <div className="policy">
        {/* <img src={SecImg3} alt="" /> */}
        <h3>30 DAYS RETURN</h3>
        <br />
        Simply return it within 30 days for an exchange
      </div>
    </div>
  </section>
    </>
  )
}

export default Section