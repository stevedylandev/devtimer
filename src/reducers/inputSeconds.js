const inputSecondsReducer = (state=120, action) => {
    switch(action.type){
        case 'TICK': 
            return state -  1;
        default: 
            return state;
    }
}

export default inputSecondsReducer; 