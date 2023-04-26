'use client';
import Head from 'next/head';
import Layout from '../component/Layout'
import '@/styles/globals.css'
import '../styles/Navbar.css'
import '../styles/Hero.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Educacion.css'
import '../styles/Footer.css'
import '../styles/Portofolio.css'
import '../styles/Contact.css'
import '../styles/AdminData.css'
import { AuthProvider } from '@/Context/Auth.Context'
import { QueryClient, QueryClientProvider } from "react-query"

export default function App({ Component, pageProps }) {


  const queryClient = new QueryClient()
  return (
    
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
        <link rel="manifest" href="/fav/site.webmanifest"/>
    </Head>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
  <Layout>
   <Component {...pageProps} />
  </Layout>
    </AuthProvider>
    </QueryClientProvider>
  </>
    )
}

