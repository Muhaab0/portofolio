import React, { useState } from 'react'
import UserApi from './UserApi'
import PortofolioApi from './PortofolioApi'
import ContactApi from './ContactApi'
import PlatFormApi from './PlatFormApi'
import Head from 'next/head'

export default function AdminData() {
    const DB = [
        "Users",
        "Portofolio",
        "Contact",
        "PlatForm"
    ]
    const [Selected, setSelected] = useState("Users")
    const [NavIndex, setNavIndex] = useState(0)

  return (
    <>
    <Head>
    <title>Admin</title>
  </Head>
    <div className='admin'>
        <div className="adminContainer">
        <h2>Admin Pannels</h2>
    <div className='adminFlex'>
        <div className='Left'>
            <ul className='flex gap10 column' >
                {DB.map((db , index)=>(
                    <li className={`${NavIndex == index ? "NavClass" : ""}`}
                     key={db} onClick={()=>{
                        setSelected(db)
                        setNavIndex(index)
                    }}>{db}</li>
                ))}
            </ul>
        </div>
        <div className="Right">
                    {Selected === "Users" ? <UserApi/>: Selected === "Portofolio" ? <PortofolioApi /> : Selected === "Contact" ? <ContactApi />: Selected === "PlatForm" ? <PlatFormApi/>: ""}
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

