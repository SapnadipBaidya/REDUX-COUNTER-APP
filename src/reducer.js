let initialState = 1 ;

function reducer(state=initialState,action){
    switch(action.type){
        case "UPGRADE":
            return state+1;
        case "DOWNGRADE":
            return state-1;
        default:
            return state;    

    }
}

export default reducer;