import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title="Formualire d'inscription" cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4> Remplir cette formualire </h4> <br />
            <div>
            <p> Nom :</p>  <spam> <input type='text' placeholder=' Votre Nom' required/> </spam>
            </div>
            <div>
            <p> Prenom: </p>  <input type='text' placeholder='Votre Prénom' />
            </div>
            <div>
             <p> Email:</p> <input type='text' placeholder='Email' required />
             </div>
             <div>
             <p> Numero: </p> <input type='number' placeholder='Votre Numero' required/>
             </div>
             <div>
             <p> homme </p> <input type="checkbox" placeholder="homme" name="homme"/> 
            </div>
            <div> 
            <p> femme </p> <input type="checkbox" placeholder="homme" name="femme"/> 
            </div>
            <div> 
              <p> age: </p> <input type="age" />
            </div>
            <div> 
              <p> CIN: </p> <input type="nmber"  placeholder="CIN" required/>
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
