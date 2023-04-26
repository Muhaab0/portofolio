import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { ArrowBack, Settings } from "@mui/icons-material";

export default function UserApi() {
  const [isShown, setIsShown] = useState(null);
  const [NameisDisabled, setNameisDisabled] = useState(true);
  const [EmailisDisabled, setEmailisDisabled] = useState(true);
  const [AdminisDisabled, setAdminisDisabled] = useState(true);
  const [id, setID] = useState("");

  const [userEdit, setuserEdit] = useState({
    name: "",
    email: "",
    isAdmin: "",
  });

  const [RegisterErrors, setRegisterError] = useState();
  const [RegisterLoading, setRegisterLoading] = useState();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [UpdateError, setUpdateError] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { data, isLoading, isError, error, refetch } = useQuery(
    "Users",
    async () => {
      return await axios
        .get("//localhost:4000/api/user")
        .then((res) => res.data);
    }
  );
  useEffect(() => {
    if (id) {
      setRegisterLoading(true);
      const EditFunction = async () => {
        try {
          const reqdata = await fetch(`//localhost:4000/api/user/${id}`);
          const res = await reqdata.json();
          setuserEdit(await res);
          setRegisterLoading(false);
        } catch (error) {
          setRegisterLoading(false);
          setRegisterError("Some thing went wrong");
        }
    };
    EditFunction()
  }
  }, [isShown]);




  const handleEdit = (e)=> {
    setuserEdit({...userEdit,[e.target.name]:e.target.value})
    
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`//localhost:4000/api/user/${id}`, userEdit)
      setIsShown(null)
      refetch()
    } catch (err) {
      setUpdateError(err?.response?.data.message)
    }

  }


  

  const handleDelete = async (id) => {
    setRegisterLoading(true);
    try {
      console.log(id);
      await axios.delete(`//localhost:4000/api/user/${id}`);
      setRegisterLoading(false);
      refetch();
    } catch (error) {
      console.log(error);
      setRegisterError(error.response?.data.message);
      setRegisterLoading(false);
    }
  };

  const PostRegister = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    const formData = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };
    try {
      const res = await axios.post(
        "//localhost:4000/api/user/register",
        formData
      );
      setIsShown(null);
      setRegisterLoading(false);
      refetch();
    } catch (error) {
      console.log(error);
      setRegisterError(error.response?.data.message);
      setRegisterLoading(false);
    }
  };

  return (
    <>
      {isShown === null && (
        <>
          {isLoading ? (
            <div className="Loading">
              <CircularProgress />{" "}
            </div>
          ) : (
            ""
          )}
          {isError ? <div className="error">{error?.message}</div> : ""}
          <button
            className="LoginBut registerBut"
            onClick={() => setIsShown(false)}
          >
            Register
          </button>
          <div className="items  flex gap10 column">
            {data?.map((user) => (
              <div
                key={user._id}
                className="flex  wrap justifiy-between align-center gap10"
              >
                <div className=" wrap item flex  gap10">
                  <div>{user._id}</div>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                  <div>{user.isAdmin.toString()}</div>
                </div>
                <div className="flex flex-end align-center gap10">
                  <button
                    className="LoginBut"
                    style={{ color: "red" }}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="LoginBut"
                    style={{ color: "green" }}
                    onClick={() => {
                      setIsShown(user);
                      setID(user._id)
                    
                    }}
                  >
                    Modify
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {isShown && (
        <>
        {RegisterLoading ? <div className='Loading'><CircularProgress/> </div> :""}
      {RegisterErrors? <div className='error'>{RegisterErrors}</div> : (
      <>
          <div className="backIcon" onClick={() => setIsShown(null)}>
            <ArrowBack />
          </div>
          <form onSubmit={handleUpdate} className="itemEdit formUpdate  flex column ">
            <div className="flex align-center  gap10">
            <input
              type="text"
              disabled={NameisDisabled}
              placeholder="Name"
              name="name"
              value={userEdit.name}
              onChange={(e) => handleEdit(e)}
              />
              <Settings style={{cursor:"pointer"}} onClick={()=>setNameisDisabled(!NameisDisabled)}  />
              </div>
              <div className="flex align-center gap10">
            <input
              type="email"
              disabled={EmailisDisabled}
              placeholder="Email"
              name="email"
              value={userEdit.email}
              onChange={(e) => handleEdit(e)}
            />
              <Settings style={{cursor:"pointer"}}  onClick={()=>setEmailisDisabled(!EmailisDisabled)} />
              </div>
              <div className="flex  align-center  gap10">
            <input
              type="text"
              placeholder="isAdmin"
              disabled={AdminisDisabled}
              name="isAdmin"
              value={userEdit.isAdmin}
              onChange={(e) => handleEdit(e)}
            />
             <Settings style={{cursor:"pointer"}}  onClick={()=>setAdminisDisabled(!AdminisDisabled)} />
              </div>
              
            <input type="submit" className="update" value="Edit" />
            {UpdateError ? <div className="error">{UpdateError}</div>:""}

          </form>
          </>
          )}
        </>
      )}
      {isShown === false && (
        <>
          <div className="backIcon" onClick={() => setIsShown(null)}>
            <ArrowBack />
          </div>
          <h2 className='formHeader' >Register Form</h2>
          <form
            onSubmit={(e) => PostRegister(e)}
            className="itemEdit flex column "
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={registerName}
              required
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={registerEmail}
              required
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              value={registerPassword}
              required
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input type="submit" value="Create" />
            {RegisterLoading ? (
              <div className="Loading">
                <CircularProgress />{" "}
              </div>
            ) : (
              ""
            )}
            {RegisterErrors ? (
              <div className="error">{RegisterErrors}</div>
            ) : (
              ""
            )}
          </form>
        </>
      )}
    </>
  );
}
