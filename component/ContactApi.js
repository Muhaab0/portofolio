
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query"
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function ContactApi() {
  
  const [isShown, setIsShown] = useState();
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newMessage, setNewMessage] = useState("");
    const { data , isLoading , isError ,error,refetch} = useQuery("Contact", async () => {
        return await axios.get("//localhost:4000/api/contact").then((res) => res.data);
    });


    useEffect(() => {
      setNewName(isShown?.name)
      setNewEmail(isShown?.emailName)
      setNewPhone(isShown?.phone)
      setNewPhone(isShown?.phone)
      setNewMessage(isShown?.message)
  }, [isShown])


  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`//localhost:4000/api/contact/${id}`)
      refetch()
    } catch (error) {
      console.log(error);
  }
  }

  return (
    <>
    {!isShown  ? (
      <>
      { isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
      {isError? <div className='error'>{error?.message}</div>:""}
  <div className='items flex gap10 column'>
        {data?.map((form)=>(
             <div key={form._id} className='flex wrap justifiy-between align-center gap10'>
            <div  className=' item flex wrap  gap20'>
            <div>{form.name}</div>
            <div>{form.emailName}</div>
            <div>{form.phone}</div>
            <div className='desc'>{form.message}</div>
            </div>
               <div className='flex wrap flex-end align-center gap10'>
               <button className='LoginBut'style={{color:"red"}} onClick={()=>handleDelete(form._id)} >Delete</button>
               <button className='LoginBut' style={{color:"green"}} onClick={()=>setIsShown(form)}>View</button>
             </div>
             </div>
                ))}
    </div>
                </>
            ) : (
              <>
              <div className='backIcon' onClick={()=>setIsShown(false)}><ArrowBack /></div>
              <form className='itemEdit flex column '>
                Sender Name:
                <input disabled type='text'  name='name' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                Sender Email:
                <input disabled type='email'  name="email" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>

                Sender Phone:
                <input disabled type='text'  name='phone' value={newPhone} onChange={(e)=>setPhone(e.target.value)}/>
                <textarea  rows={8} type='text'  name='message' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}/>
              </form>
             </>
            )}
            
</>
  )
}


