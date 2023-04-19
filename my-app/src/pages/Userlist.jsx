import { useEffect, useState } from "react";
import { fetchPosts } from "../api"

export default function UserList(){
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        const {data} = await fetchPosts();
        console.log(data);
        setPosts(data);
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h1>User List</h1>
            {posts && posts.map(post => (
                <div key={post.id}>
                    <p>id: {post.id}</p>
                    <p>{post.name}</p>
                    <p>{post.email}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}