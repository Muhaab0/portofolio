import { useAppContext } from '@/Context/Auth.Context'
import Hero from '@/component/Hero'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import AdminData from '@/component/AdminData';
import Head from 'next/head';


export default function admin() {
        <Head>
          <title>AdminPannel</title>
        </Head>
  const {error , login , logout , userData , userToken} = useAppContext()
  const router = useRouter();
  
  
  useEffect(()=> {
      if (!userToken)
      router.push("/")
  },[userToken])
  
  
  return (
    userToken ?
    <>
    <AdminData />
    </> 
    :
    <>
    <Hero />
    </>
  )
}
