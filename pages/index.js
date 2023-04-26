"use client";
import { useAppContext } from '@/Context/Auth.Context';
import Educacion from '@/component/Educacion'
import Hero from '@/component/Hero'
import Skills from '@/component/Skills'
import About from '@/component/about'
import { CircularProgress } from '@mui/material';
import Head from 'next/head';


export default function Home() {
  const {isLoading} = useAppContext()
  
  return (
    <div>
          <Head>
           <title>Home</title>
        </Head>
      {isLoading  ? <div className='Loding'><CircularProgress /></div> : ""}
      <Hero/>
      <About />
      <Skills />
      <Educacion />
    </div>
  )
}
