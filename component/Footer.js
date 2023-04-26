import React from 'react'
import { Facebook , LinkedIn, WhatsApp, GitHub, Twitter , KeyboardDoubleArrowUp} from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
export default function Footer() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "platforme",
    async () => {
      return await axios
        .get("//localhost:4000/api/platform")
        .then((res) => res.data);
    })

    
  return (
     <footer>
    <a href="#Navbar" className="arriba">
        <KeyboardDoubleArrowUp />
    </a>
            {isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
            {isError? <div className='error'>{error}</div>:""}
    {data?.map((dat)=>(
    <div key={dat._id} className="redes">
      <a href={`{${dat?.facebook}}`} target="_blank">
        <Facebook />
      </a>
      <a href={`{${dat.linkedin}}`} target="_blank">
        <LinkedIn />
      </a>
      <a href={`{${dat.github}}`} target="_blank">
        <WhatsApp />
      </a>
      <a href='https://www.twitter.com' target="_blank">
        <Twitter />
      </a>
      <a href={`{${dat.whatsup}}`} target="_blank">
        <GitHub />
      </a>
        
    </div>
    ))}

</footer>
  )
}
