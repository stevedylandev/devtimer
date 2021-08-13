const pauseReducer = (state=true, action) => {
    switch(action.type){
        case 'START':
            return !state;
        default: 
            return state;
    }
}

export default pauseReducer;