import React,{useState,useEffect} from 'react';
import logo from '../img/student.svg';

const fetchData = async () => {
    const res = await fetch('http://0.0.0.0:5000/api/v1/blogposts/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "api-token": JSON.parse(localStorage.jwt).jwt_token
        }
    })
    
    const json = await res.json()
    return json
}
const Card = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      fetchData().then(employees => {
        setEmployees(employees)
      })
    }, [])
    return (
        <>
        {employees.map(user =>
        <div className="col" key={user.id}>
            <img src={logo} alt="student" />
            <div className="student-details">
                <span><span>name: </span>{user.name}</span>
                <span><span>rating: </span> {user.rating}</span>
            </div>
             <span className="user_id">{user.id}</span>
        </div>
        )}
      </>
    )
}

export default Card
