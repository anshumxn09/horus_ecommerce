import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from  '../components/reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts : [],
    allProducts :  [],
}

export const FilterProvider = ({children}) => {
    const {products, isLoading} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if(!isLoading) dispatch({type : 'FILTER_PRODUCTS', payload : products})
    }, [isLoading])
    return <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}