import { useEffect, useState } from "react"
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import SinglePost from "./singlepost"

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            await getPosts();
        })()
    }, [])

    async function getPosts() {
        const res = await fetch('https://capstone-project1-q1ao.onrender.com/post')
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setPosts(data);
        } else console.error("Failed to load posts")
    }

    if ( posts.length === 0 ) return <Spinner />

    return (
        <Container>
            <h2>Posts</h2>

            {posts.map((post, i) => {
                return <SinglePost post={post} key={i} />
            })}
        </Container>
    )
}
