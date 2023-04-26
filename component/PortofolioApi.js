
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from "react-query"
import { CircularProgress } from '@mui/material';
import { ArrowBack, Settings } from '@mui/icons-material';
import Portofolio from '@/pages/portofolio';

export default function PortofolioApi() {
  const { data , isLoading , isError ,error , refetch} = useQuery("Portofolio", async () => {
      return await axios.get("//localhost:4000/api/portofolio").then((res) => res.data);
  });
  const [isShown, setIsShown] = useState(null);
  const [RegisterErrors, setRegisterError] = useState();
  const [RegisterLoading, setRegisterLoading] = useState();
  const [registerName, setRegisterName] = useState("")
  const [registerDesc, setRegisterDesc] = useState("")
  const [registerLink, setRegisterLink] = useState("")
  const [registerImg, setRegisterImg] = useState([])
  const [file, setfile] = useState()

  const [NameisDisabled, setNameisDisabled] = useState(true);
  const [DescisDisabled, setDescisDisabled] = useState(true);
  const [LinkisDisabled, setLinkisDisabled] = useState(true);
  const [id, setID] = useState("");

  const [PortofolioEdit, setPortofolioEdit] = useState({
    name: "",
    desc: "",
    link: "",
    photo: "",
  });







    
    
  
    const handleDelete = async (id) => {
      setRegisterLoading(true)
      try {
        console.log(id);
        await axios.delete(`//localhost:4000/api/portofolio/${id}`)
        setRegisterLoading(false)
        refetch()
      } catch (error) {
        console.log(error);
        setRegisterError(error.response?.data.message)
        setRegisterLoading(false)
    }
    }
    
    const PostRegister = async (e) => {
      e.preventDefault()
      setRegisterLoading(true)
      const formData = new FormData();
        console.log(file);
      formData.append("file", file);
      formData.append("name", registerName);
      formData.append("desc", registerDesc);
      formData.append("link", registerLink);


    try {
      const res = await axios({
        method: "post",
        url: "//localhost:4000/api/portofolio",
        data: formData,
        "content-type": "multipart/form-data",
      });
  
      setIsShown(null)
      setRegisterLoading(false)
      console.log("succes");
      refetch()
    } catch (error) {
      console.log(error);
      setRegisterError(error.response?.data.message)
      setRegisterLoading(false)
  }
  }



  useEffect(() => {
    if (id) {
      setRegisterLoading(true);
      const EditFunction = async () => {

        try {
          const reqdata = await fetch(`//localhost:4000/api/portofolio/${id}`);
          const res = await reqdata.json();
          setPortofolioEdit(await res);
          setRegisterLoading(false);
        } catch (error) {
          setRegisterLoading(false);
          setRegisterError("Some thing went wrong")
        }
    };
    EditFunction()
  }
  }, [isShown]);

  
  const handleEdit = (e)=> {
    setPortofolioEdit({...PortofolioEdit,[e.target.name]:e.target.value})
    
  }
  
  
  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(`//localhost:4000/api/portofolio/${id}`, PortofolioEdit)
    setIsShown(null)
    refetch()
    if (file) {      
      const formData = new FormData();
      formData.append("file", file);
      await axios.put(`//localhost:4000/api/portofolio/${id}`, formData)
      setIsShown(null)
      refetch()
    }

    
  }


  return (
    <>
    {isShown === null  && (
      <>
      {isError? <div className='error'>{error?.message}</div>:""}
      { isLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
      <button className='LoginBut registerBut' onClick={()=>setIsShown(false)}>Add New</button>
    <div className='items flex gap10 column'>
        {data?.map((form)=>(
          <div  key={form._id} className='flex wrap justifiy-between align-center gap10'>
            <div className=' item flex wrap  gap20'>
            <div><img alt="img" src={form.photo}/></div>
            <div>{form.name}</div>
            <div className='desc'>{form.desc.toString()}</div>
            <div>{form.link}</div>
            </div>
                        <div className='flex flex-end align-center gap10'>
                        <button className='LoginBut'style={{color:"red"}} onClick={()=>handleDelete(form._id)} >Delete</button>
               <button className='LoginBut' style={{color:"green"}} onClick={()=> {setIsShown(form)
                 setID(form._id)}}>Modify</button>
                      </div>
                      </div>
          ))}
              </div>
          </>
 )}{isShown &&  (
    <>
     {RegisterLoading ? <div className='Loading'><CircularProgress/> </div> :""}
      {RegisterErrors? <div className='error'>{RegisterErrors}</div> : (
      <>
       <div className='backIcon' onClick={()=>setIsShown(null)}><ArrowBack /></div>
    <div className='flex wrap updateform   '>
    <div className='EditImg'><img alt="img" src={PortofolioEdit.photo}/></div>
    <form onSubmit={handleUpdate} className='itemEdit formUpdate flex column '>
      
    <div className="inputContainer flex align-center  gap10">
      <input type='text' placeholder='Name' name='name'  disabled={NameisDisabled} value={PortofolioEdit.name} onChange={(e)=>handleEdit(e)}/>
      <Settings style={{cursor:"pointer"}} onClick={()=>setNameisDisabled(!NameisDisabled)}  />
              </div>
              
    <div className="inputContainer flex align-center  gap10">
      <input type='text' placeholder='Link' disabled={LinkisDisabled} name='link' value={PortofolioEdit.link} onChange={(e)=>handleEdit(e)}/>
      <Settings style={{cursor:"pointer"}} onClick={()=>setLinkisDisabled(!LinkisDisabled)}  />
              </div>

      <input type="file"   onChange={(e)=>setfile(e.target.files[0])}/>

    <div className="inputContainer flex align-center  gap10">
      <textarea rows={8} type='text' disabled={DescisDisabled} placeholder='Description'  name='desc' value={PortofolioEdit.desc} onChange={(e)=>(handleEdit(e))}/>
      <Settings style={{cursor:"pointer"}} onClick={()=>setDescisDisabled(!DescisDisabled)}  />
              </div>
      <input type='submit' className="update" value={"Edit"} />
    </form>
    </div>
      </>
      ) }
   </>

     )}{isShown === false && (
      <>
      <div className='backIcon' onClick={()=>setIsShown(null)}><ArrowBack /></div>
      <h2 className='formHeader'>Register Form</h2>
      <form onSubmit={PostRegister} className='itemEdit flex column '>
      <input type='text' placeholder='Name'  name='name' value={registerName} required onChange={(e)=>setRegisterName (e.target.value)}/>
      <input type='text' placeholder='Link'  name="link" value={registerLink} required onChange={(e)=>setRegisterLink(e.target.value)}/>
      <input type="file"   required onChange={(e)=>setfile(e.target.files[0])}/>
      <textarea type='text' rows={8}  placeholder='Description'  name='desc' value={registerDesc} required onChange={(e)=>setRegisterDesc(e.target.value)}/>
      <input type='submit' value="Create"/>
      {RegisterLoading ? <div className='Loading'><CircularProgress/> </div>  : "" }
       {RegisterErrors? <div className='error'>{RegisterErrors}</div>:""}
    </form>
      </>
   )}

   </>   
)
}

