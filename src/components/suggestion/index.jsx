import {useState, useEffect} from "react"

const Suggestion = () =>{
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] =useState(true)

    useEffect(() =>{
 isLoading
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>response.json())
        .then((data) =>{
            setUsers(data)
            setIsLoading(false)
            
        }).catch((err) =>{
            console.log(err)
            setIsLoading(false)
        });
    }, 
    [])
    return  <div style={{color: "white"}}>
<h4 >Discovery Pick for you</h4>

    //    <div>{isLoading ? "loading" : ""}</div>
    // {
    users?.map((users) =>{
        return <div key={users.id}>{users.name}</div>
    })
}

    </div>
}

export default Suggestion;