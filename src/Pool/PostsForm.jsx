import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function PostsForm({posttitle,body,comment}){
    return(
            <div className="card w-75">
                <div className="card-body">
                     <h5 className="card-title">{posttitle}</h5>
                     <p className="card-text">{body}</p>
                     <ul className= "list-group">
                        {comment.map(comment =>{
                              return <li key ={comment.id} className = "list-group-item">{comment.text}<span ><AiFillStar /> - {comment.rating}</span></li>
                        })}
                     </ul>
                     <input type="text" className="form-control" placeholder="Your Reply"/>
                      {/* <a href="#" class="btn btn-primary" onclick = {() => store.dispatch(addPost())}>Add Post</a> */}
                    
                </div>
            </div>
    )
}