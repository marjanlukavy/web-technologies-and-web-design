import React,{useState} from 'react';
const CardCreation = () => {
    const [name,setFullname] = useState("");
    const [rating,setRating] = useState("");

    const Create = async () => {
        let item = {name,rating}
        await fetch("http://0.0.0.0:5000/api/v1/blogposts/",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "api-token": JSON.parse(localStorage.jwt).jwt_token
            },
            body: JSON.stringify(item)
        })
        window.location.reload();
    }

        const [id,setId] = useState("");
        const Delete= async () => {
             await fetch(`http://0.0.0.0:5000/api/v1/blogposts/${id}`,
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "api-token": JSON.parse(localStorage.jwt).jwt_token
                }
            })
            window.location.reload();
 }
 const [user_id,set_user_id] = useState("");
 const [user_name,setName] = useState("");
 const [user_rating,set_user_rating] = useState("");

 const Edit = async () => {
    let item = {name:user_name,rating:user_rating}
     await fetch(`http://0.0.0.0:5000/api/v1/blogposts/${user_id}`,
     {
         method: 'PUT',
         headers: {
             "Content-Type": "application/json",
             "api-token": JSON.parse(localStorage.jwt).jwt_token
         },
         body: JSON.stringify(item)
     })
     window.location.reload();
}

    return (
        <div className="students-manipulations">
        <div className="student-wrap">
          <input
            type="text"
            placeholder="Fullname"
            id="name-creation"
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            id="rating-creation"
            onChange={(e) => setRating(e.target.value)}
          />
          <button type="button" id="create" name="button" onClick={Create}>Create</button>
        </div>
        <div className="student-wrap">
          <input type="text" placeholder="id" id="student-id" onChange={(e) => setId(e.target.value)}/>
          <button type="button" id="delete" name="button" onClick={Delete}>Delete</button>
        </div>
        <div className="student-wrap">
          <input type="text" placeholder="id" id="old-student-id" onChange={(e) => set_user_id(e.target.value)}/>
          <input type="text" placeholder="New name" id="new-student-name" onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="New rating" id="new-student-rating" onChange={(e) => set_user_rating(e.target.value)}/>
          <button type="button" id="edit" name="button" onClick={Edit}>Edit</button>
        </div>
      </div>
    )
}

export default CardCreation
