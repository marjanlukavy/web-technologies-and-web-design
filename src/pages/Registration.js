import React,{useState} from 'react'

const Registration = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const createStudent = async () => {
        let item = {email,password,name}
        let result = await fetch("http://0.0.0.0:5000/api/v1/users/",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "*"
            },
            body: JSON.stringify(item)
        })
        // window.location.reload();
        result = await result.json();
        console.log(result)
        localStorage.setItem('jwt', JSON.stringify(result));

    }
    return (
        <div className="login">
            <h1>Registration Page</h1>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={createStudent}>Create</button>
        </div>
    )
}

export default Registration
