import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Rent  A Car ' subtitle='Admin ' />

          <form className='flex'>
            <div className='box'>
              <span>Gestion des réservations</span>
              <input type='text' placeholder='' />
            </div>
            <div className='box'>
              <span>Suivi des véhicules </span>
              <input type='text' placeholder='' />
            </div>
            <div className='box'>
              <span>Rapports et statistiques</span>
              <input type='text' placeholder='' />
            </div>
            <div className='box'>
              <span>Notifications et alertes  </span>
              <input type='text' placeholder='' />
            </div>
            <div className='box'>
              <h5>Cliquez ici</h5>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
