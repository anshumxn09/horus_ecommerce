const ProductReducer = (state, action) => {
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading : true
            }
        case 'API_ERROR':
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        case 'MY_API_DATA':
            const featuredData = action.payload.filter(( currElem) => {
                return currElem.featured === true;
            })
            return {
                ...state,
                isLoading : false,
                isError : false,
                products : action.payload,
                featureProducts : featuredData,
            }
        default:
            return state;

    }
}

export default ProductReducer;