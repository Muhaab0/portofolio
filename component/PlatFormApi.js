
import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from "react-query"
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function PlatFormApi() {
    const { data , isLoading , isError ,error ,refetch} = useQuery("platforms", async () => {
        return await axios.get("//localhost:4000/api/platform").then((res) => res.data);
    });
    const [isShown, setIsShown] = useState(null);
    const [RegisterErrors, setRegisterError] = useState();
    const [RegisterLoading, setRegisterLoading] = useState();
    const [registerFace, setRegisterFace] = useState("")
    const [registerGit, setRegisterGit] = useState("")
    const [registerLinkedin, setRegisterLinkedin] = useState("")
    const [registerWhatsup, setRegisterWhatsup] = useState("")


    const handleDelete = async (id) => {
      try {
        console.log(id);
        await axios.delete(`//localhost:4000/api/platform/${id}`)
        refetch()
      } catch (error) {
        console.log(error);
    }
    }

    const PostRegister = async (e) => {
      e.preventDefault()
      setRegisterLoading(true)
      const formData = {
        facebook: registerFace,
        linkedin: registerLinkedin,
        github: registerGit,
        whatsup: registerWhatsup
      }
      try {
        await axios.post("//localhost:4000/api/platform",formData)
        setIsShown(null)
        setRegisterLoading(false)
        refetch()
      } catch (error) {
        console.log(error);
        setRegisterError(error.response?.data.message)
        setRegisterLoading(false)
    }
    }

  return (
    <>

    {isShown === null  && (
      <>
      {isError? <div className='error'>{error?.message}</div>:""}
  { isLoading ? <div className='Loading'><CircularProgress/> </div>  :  "" }
    <button className='LoginBut registerBut' onClick={()=>setIsShown(false)}>Add New</button>
      <div className='items wrap flex gap10 column'>
      {data?.map((platform)=>(
         <div className='flex wrap justifiy-between align-center gap10' key={platform._id}>
        <div  className=' item flex column gap20'>
            <div>Facebook: {platform.facebook}</div>
            <div>LinkedIn: {platform.linkedin}</div>
            <div>GitHub: {platform.github}</div>
            <div>WhatSup: {platform.whatsup}</div>
            </div>
            <div className='flex flex-end align-center gap10'>
            <button className='LoginBut'style={{color:"red"}} onClick={()=>handleDelete(platform._id)} >Delete</button>
                      </div>
            </div>
            ))}
    </div>
    </>
    )}{isShown === false && (

      <>
      <div className='backIcon' onClick={()=>setIsShown(null)}><ArrowBack /></div>
      <h2 className='formHeader'>Register Form</h2>
      <form onSubmit={PostRegister} className='itemEdit flex column '>
      <input type='text' placeholder='Facebook' value={registerFace} required onChange={(e)=>setRegisterFace (e.target.value)}/>
      <input type='text' placeholder='GitHub'  value={registerGit} required onChange={(e)=>setRegisterGit(e.target.value)}/>
      <input type='text' placeholder='Linkedin'  value={registerLinkedin} required onChange={(e)=>setRegisterLinkedin(e.target.value)}/>
      <input type='text' placeholder='WhatsUp'  value={registerWhatsup} required onChange={(e)=>setRegisterWhatsup(e.target.value)}/>
      <input type='submit' value="Create"/>
      {RegisterLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
       {RegisterErrors? <div className='error'>{RegisterErrors}</div>:""}
    </form>
    </>
      )}   
    </>
  )
}


