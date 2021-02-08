const initialState = {
    data: [],
}

const toggleThemes = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        themeType: action.themeType,  
                    },
                ],
            };
        default:
            return state;
    }
};

export default toggleThemes;