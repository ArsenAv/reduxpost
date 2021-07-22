import React from "react";
import PostsForm from "./PostsForm";
import {useSelector} from "react-redux";
import { useState } from 'react';
import { store } from "../redux/store";
import { searchPost } from "../redux/actions";


function Pool(){
    const posts = useSelector(state => state.list.posts)
    // const searchFiled = useSelector(state=> state.list.searchFiled)
    //  const handlechange = (event) =>{
    //      const searchWord = event.target.value;
    //      dispatch(searchPost(searchWord))
    //      const filtredPost = posts.filter(post => {
    //          return post.title.toLowerCase().includes(dispatch())
    //      })
    //  }
    return(
         <div className = "container-md">
        
             {/* <input type = "text" placeholder = "SerchPosts" className = "form-control" onChange = {handlechange()}/> */}
            {posts.map(post => {
             return <PostsForm post = {post} key= {post.id} posttitle = {post.title} body = {post.body} comment = {post.comments}/>
             })}
        </div>
    )
}
export default Pool;