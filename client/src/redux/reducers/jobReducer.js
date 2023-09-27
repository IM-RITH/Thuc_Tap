const initialState = {
    jobs: [],
}

export const jobReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALLJOBS' : return{
            ...state,
            jobs: action.payload
        }
        default : return state;
    }
}