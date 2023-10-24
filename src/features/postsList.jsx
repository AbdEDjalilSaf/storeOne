import {useSelector} from "@reduxjs/toolkit"

let postsList = ()=>{

    let posts = useSelector(state=> state.posts)
let renderPosts = posts.map(post =>{
    <article key = {post.key}>
    <h2>{post.title}</h2>
    <p>{post.conyent.substring(0, 100)}</p>
    </article>
})

return {




}








}





















