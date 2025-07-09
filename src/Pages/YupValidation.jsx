import React, { useEffect, useState } from 'react'
import "../Components/3.axios/errorHandling/f/src/App.css"
import registerShema from '../Components/5.Yup/Validator/register'

export default function YupValidation() {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [isFormValid , setIsFormValid] = useState(false)

    const validLive = async () => setIsFormValid(await registerShema.isValid({name , email})) 
    useEffect(() => { validLive() }, [name , email])

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("register")
    }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name ..." value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email ..." value={email} onChange={e => setEmail(e.target.value)} />
          <button type="submit" onSubmit={handleSubmit} disabled={!isFormValid}>Rigester</button>
          <p className="message"> Already registered? <a href="#">Sign In</a> </p>
        </form>
      </div>
    </div>
  )
}
