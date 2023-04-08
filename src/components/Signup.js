import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

  let navigate = useNavigate();
  const [data, setData] = useState({ s_name: '', s_email: '', s_password: '', s_password2: '' });
  
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const preCheck = (e) => {
    e.preventDefault();
    if(data.s_password === data.s_password2){
      handleSubmit();
      navigate("/");
      props.alert("Account created sucessfully", "success");
    }else{
      props.alert("Password mismatch, Please try again !", "warning");
    }
  }

  const handleSubmit = async (e) => {
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": data.s_name,
        "email": data.s_email,
        "password": data.s_password
      })
    });
    const json = await response.json()
    console.log(json);
    
    if (json.authTocken) {
      props.alert("Account created sucessfully, Please Login with your credential", "success")
      navigate("/login");
    } else {
      props.alert("User with this mail alredy exists !", "warning")
    }
  }

  return (
    <div className='container mt-4'>
      <form onSubmit={preCheck}>
        <div className="mb-3">
          <label htmlFor="s_name" className="form-label">Name</label>
          <input type="text" className="form-control" id="s_name" name='s_name' onChange={onChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="s_email" className="form-label">Email</label>
          <input type="email" name='s_email' className="form-control" id="s_email" onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="s_password" className="form-label">Password</label>
          <input type="password" name='s_password' className="form-control" id="s_password" onChange={onChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="s_password2" className="form-label">Re-enter password</label>
          <input type="password" name='s_password2' className="form-control" id="s_password2" onChange={onChange} required minLength={5} />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Signup
