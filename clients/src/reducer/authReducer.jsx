const authReducer = (state, action) =>{
    switch(action.type){
        case "REMOVE_TOKEN": {
            const removeToken = localStorage.removeItem("token");
            
            return{
                ...state,
                token: "",
                removeToken
            }
        }

        default: 
            return state;
    }
};

export default authReducer;