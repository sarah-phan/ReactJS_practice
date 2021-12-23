// import { DELETE_USER } from "./../constant";
// import { EDIT_USER } from "./../constant";
// import { SUBMIT_USER } from "./../constant";
// import { GET_KEYWORD } from "./../constant";

// import{
//     DELETE_USER,
//     EDIT_USER,
//     SUBMIT_USER,
//     GET_KEYWORD,
// }from "./../constant"

// Khi có quá nhiều thì làm cách ngắn gọn
import * as ActionType from "./../constant"

const actDeleteUser = (user) => {
    return{
        // type: "DELETE_USER",
        type: ActionType.DELETE_USER,
        payload: user,
    };
};
const actEditUser = (user) => {
    return{
        type: ActionType.EDIT_USER,
        payload: user,
    };
};

const actOnChange = (user) => {
    return{
        type: ActionType.SUBMIT_USER,
        payload: user
    };
};

const actGetKeyword = (key) => {
    return{
        type: ActionType.GET_KEYWORD,
        payload: key,
    }
}
export {actDeleteUser, actEditUser, actOnChange, actGetKeyword};