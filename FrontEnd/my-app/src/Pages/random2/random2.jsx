import React , {useState , useEffect} from 'react';
import axios from 'axios';

var client = axios.create({
    baseURL:'https://api.quotable.io/random'
})

const Random = () => {
    const [post , setPost] = useState([])

    useEffect(() => {
        client.get().then((response) => {
            setPost(response.data)
        })
    })
 
   
    return (
        <div>
            <h1>{post.dateAdded}</h1>
        </div>
    )
}

export default Random ;