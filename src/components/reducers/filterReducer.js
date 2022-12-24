const FilterReducer = (state, action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'FILTER_PRODUCTS':
            return {
                ...state,
                filterProducts : [...action.payload],
                allProducts : [...action.payload],
            }
        default :
        return state;
    }
}

export default FilterReducer;
