import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
       if(localStorage.getItem("jwt")) {
           history.push("/")
       } else {
           localStorage.clear()
       }
    }, [])
    const login = async () => {
        let item = {email,password}
        let result = await fetch("http://0.0.0.0:5000/api/v1/users/login",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();

        localStorage.setItem('jwt', JSON.stringify(result));
        console.log(result)
        // if(!result.email) {
        //     history.push("/")
        //     console.log(1)
        // }
    }
    return (
        <div className="login">
            <h1>Login Page</h1>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
