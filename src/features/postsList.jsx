import {useSelector} from "@reduxjs/toolkit"
import {sellectAllPosts} from "./postSlice"

let postsList = ()=>{

    let posts = useSelector(sellectAllPosts)
let renderPosts = posts.map(post =>{
    <article key = {post.key}>
    <h2>{post.title}</h2>
    <p>{post.conyent.substring(0, 100)}</p>
    </article>
})

return (
   
    <div>
        <h3>posts</h3>
        {renderPosts}
    </div>

)













}





















