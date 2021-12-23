import * as ActionType from "./../constant"

let initialState = {
    listUser: [
        {
            id: 1,
            fullname: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "123456789",
            type: "VIP",
        },
        {
            id: 2,
            fullname: "Nguyen Van A",
            username: "vana",
            email: "vana@gmail.com",
            phoneNumber: "123456789",
            type: "USER",
        },
    ],
    keyword: "",
    userEdit: null,
};

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.DELETE_USER: {
            // state là từ state=initialState
            let listUser = [...state.listUser];
            const index = state.listUser.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                listUser.splice(index, 1);

                // cập nhật lại state do không có hàm setState
                state.listUser = listUser;
            }
            //trả về state mới
            return { ...state };
        }
        case ActionType.SUBMIT_USER: {
            let listUser = [...state.listUser];
            if (action.payload.id) {
                const index = state.listUser.findIndex((user) => user.id === action.payload.id);
                if (index !== -1) {
                    listUser[index] = action.payload;
                }
            } else {
                // Add user
                const userNew = { ...action.payload, id: new Date().getTime() };
                listUser.push(userNew);
            }
            state.listUser = listUser;
            return { ...state };
        }
        case ActionType.EDIT_USER: {
            state.userEdit = action.payload;
            return { ...state };
        }
        case ActionType.GET_KEYWORD:{
            state.keyword = action.payload;
            return {...state};
        }
        default:
            //trả về state mới
            return { ...state };
    }
}
export default userReducer;