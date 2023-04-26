import React, { useState } from 'react'
import { Email, LocationOn, Phone , Send } from '@mui/icons-material'
import map from "../public/assets/map.png"
import { CircularProgress } from '@mui/material'
import axios from 'axios'
import Head from 'next/head'

export default function Contact() {
    const [RegisterError, setRegisterError] = useState()
    const [RegisterLoading, setRegisterLoading] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const PostRegister = async (e) => {
        e.preventDefault()
        setRegisterLoading(true)
        const formData = {
          name: name,
          email: email,
          phone: phone,
          message: message
        }
        try {
          const res = await axios.post("//localhost:4000/api/contact",formData)
          setRegisterLoading(false)
          setRegisterError("Your Message has been sent")
        } catch (error) {
          console.log(error);
          setRegisterError(error.response?.data.message)
          setRegisterLoading(false)
      }
      }

  return (
    <>

    <Head>
        <title>Contact</title>
        </Head>
    <section id="contacto" className="contacto">
        <div className="contenido-seccion">
            <h2>Contact Me</h2>
            <div className="fila">
                <div className="col">
                    <form onSubmit={PostRegister}>
                    <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="Email" required  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" placeholder="Phone" required  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"  value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button className="SendButton">
                    Send Message <Send />
                        <span className="overlay"></span>
                    </button>
                    {RegisterLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
                    {RegisterError? <div className='error'>{RegisterError}</div>:""}
                    </form>
                </div>
                {/* <!-- Mapa --> */}
                <div className="col">
                    <div className="info">
                        <ul>
                            <li>
                                <LocationOn />
                               20St , Faisal ,Giza
                            </li>
                            <li>
                                <Phone />
                                Call Me: +2010 175 283 
                            </li>
                            <li>
                                <Email />
                                Email: Muuhaab@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  )
}
