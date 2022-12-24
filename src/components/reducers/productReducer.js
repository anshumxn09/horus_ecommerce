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
        case 'SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading : true,
            };
        
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                isSingleLoading : false,
                isError : false,
                singleProduct : action.payload
            }
        case 'SINGLE_ERROR':
            return {
                ...state,
                isSingleLoading : false,
                isError : true,
            }
        default:
            return state;
    }
}

export default ProductReducer; 