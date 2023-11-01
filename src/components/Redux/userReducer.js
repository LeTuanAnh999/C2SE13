// userReducer.js

const SET_USER = "SET_USER";

export const setUser = (userData) => ({
    type: SET_USER,
    payload: userData
});

const initialState = {
    mytoken: false,
    name: "",
    image: "",
    maungvien: "",
    email: ""
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload
            };
        // ...
        default:
            return state;
    }
};

export default userReducer;
