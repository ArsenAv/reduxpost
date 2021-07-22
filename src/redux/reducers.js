import {ADD_TO_LIST, ADD_POST,addToList,addPost,SEARCH_POST,searchPost, REMOVE_LIST,removeFromList} from './actions';
import {combineReducers} from 'redux';

const bodytext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const initialState = {
    posts: [
        {id: 1, used: false, title: "Text1", body: bodytext, comments:[{id:1, text:"comment1", rating: "5"}]}, 
        {id: 2, used: false, title: "Text2", body: bodytext, comments:[{id:2, text:"comment3", rating: "1"}, {id:3, text:"comment4" ,rating: "4"}]}, 
        {id: 3, used: false, title: "Text3", body: bodytext, comments:[]}
    ],
    searchFiled: ""
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST: {
            for(let i = state.posts.length - 1; i >= 0; i--){
                if(state.posts[i].used === false){
                    let posts = [...state.posts];
                    posts[i].used = true;
                    return {posts: posts}
                }
            }
            return state
        }
        default:
            return state
    }
};
const listremoveReducer = (state = initialState,action) =>{
    switch(action.type){
        case REMOVE_LIST: {
            for(let i = 0; i < state.posts.length; i++){
                if(state.posts[i].used === true){
                    let posts = [...state.posts]
                    posts[i].used = false;
                    
                       return {posts:posts}
                }
                    break;
             }
         }
    }
};
// const searchReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SEARCH_POST: {
//             const searchWord = action.payload
//             ({serchFiled: searchWord});
//         }
//     }
// }



export const postsReducer = combineReducers({list: listReducer});