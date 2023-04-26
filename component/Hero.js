import React from 'react'
import HeroImg from "../public/assets/Muhaab10.jpg"
import { Facebook , LinkedIn, WhatsApp, GitHub, Twitter } from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export default function Hero() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "platform",
    async () => {
      return await axios
        .get("//localhost:4000/api/platform")
        .then((res) => res.data);
    })


  return (
<section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src={HeroImg.src} alt=""/>
                
            </div>
            <h1 style={{fontSize:"36px"}}>MUHAAB MEDHAT</h1>
            <h2>Software Engineer - Full Stck Developer</h2>
            {isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
            {isError? <div className='error'>{error}</div>:""}
            {data?.map((dat)=>(
            <div key={dat._id} className="redes">
               <a href={`${dat.facebook}`} target="_blank"><Facebook /></a>
               <a href='https://www.twitter.com'><Twitter /></a>
               <a href={`${dat.linkedin}`} target="_blank"><LinkedIn /></a>
               <a href={`${dat.whatsup}`} target="_blank"><WhatsApp /></a>
               <a href={`${dat.github}`} target="_blank"><GitHub /></a>
            </div>
            ))}
        </div>
    </section>


  )
}
