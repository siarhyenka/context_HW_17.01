import { useEffect, useState } from "react"
import { PostListData } from "./models/PostListData";
import './PostList.css'
import { Link } from "react-router-dom";
import { PostItem } from "../models/PostItem";

export const PostList = () => {
    const [posts, setPosts] = useState<PostItem[]>([])

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(Response => Response.json())
        .then((data: PostListData) => {
            setPosts(data.posts)
            console.log(data);
        })
    }, [])

    return <div className="container">
                {posts.length !== 0 && posts.map((shortPost)=>
                
                    <div className="post__item" key={shortPost.id}> 
                        <div className="post__number">{shortPost.id}</div>
                        <div className="post__title">
                            <Link to={`/post/${shortPost.id}`}>{shortPost.title}</Link>
                            </div>
                    </div>
                 )}

            </div>
}