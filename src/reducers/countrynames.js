const initialState = {
    data: [],
}

const countryNames = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_COUNTRY':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        countryName: action.countryName,  
                    },
                ],
            };
        default:
            return state;
    }
};

export default countryNames;