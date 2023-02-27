import { useEffect, useState } from "react";

const useToken = user=> {
    const [token,setToken]=useState('')
    useEffect(()=>{
      const email=user?.user?.email;
      console.log(user)
      fetch(`http://localhost:5000/api/users/${email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        // user_name: data.name,
        user_email:email,
        // user_pass: data.password,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    },[user])

    return token
};

export default useToken;