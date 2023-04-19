import { useEffect, useState } from "react";
import { fetchPosts } from "../api"
import { Outlet, Link } from "react-router-dom";

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
                    <Link to="/album">Albums</Link>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}