import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PostItem } from "../models/PostItem";
import './PostPage.css'

export const PostPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState<PostItem>()
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${postId}`)
        .then(Response => Response.json())
        .then((data: PostItem) => {
            setPost(data)
            
        })
    },[postId])

    const handleGoBackButtonClick = () => {
        navigate('../../post')
    }
   
    const handleNextPageClick = () => {
        navigate(`../${+postId! + 1}`)
    }
    

    return <div className="container">
        {post && <div className="container">
                <button className="back__btn" onClick={handleGoBackButtonClick}>go back</button>
                <h1 className="title">{post.title}</h1>
                <div className="body">{post.body}</div>
                <div className="tags">
                {post.tags.map((tag)=> <div className="tag" key={tag}>#{tag}</div>)}
                </div>
            </div>}
            <button className="next__page" onClick={handleNextPageClick}>next-page</button>
    </div>
}