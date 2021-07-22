import React from "react";
import {addToList, removeFromList} from "../redux/actions"
import {useDispatch, useSelector} from "react-redux";
import { useState } from 'react';


 function List() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.list.posts);
    const [newPosts, setPosts] = useState(posts);

   const addToList = () => {
        const lastFreePost = () => dispatch(addToList())
        if (lastFreePost !== null){
            let posts = [...posts]
            posts.push(lastFreePost)
            setPosts(posts);
        }
    }
    const removeFromList = () => {
        const freeLastPost = () => dispatch(removeFromList())
        let posts = [...posts]
        if (posts.length > 0){
            posts.pop()
            setPosts(posts);
        }
    }

    return(
        <div className="container-md">
            <button onChange ={addToList}>+</button>
            <button onChange ={removeFromList}>-</button>
        </div>
    )
}
export default List;