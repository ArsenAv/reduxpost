 export const ADD_TO_LIST = "LIST/ADD_TO_LIST";
 export const ADD_POST = "POOL/ADD_POST";
 export const SEARCH_POST = "POOL/SEARCH_POST";
 export const REMOVE_LIST = "LIST/REMOVE_LIST";
export function addToList(){
    return(
        {
            type: ADD_TO_LIST
        }
    )
};
export function removeFromList() {
    return(
        {
            type: REMOVE_LIST
        }
    )
}
export function addPost(newPost){
    return(
        {
            type: ADD_POST,
            payload: newPost
        }
    )
};
export function searchPost(searchWord) {
    return(
        {
            type: SEARCH_POST,
            payload: searchWord
        }
    )
}
