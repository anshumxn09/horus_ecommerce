import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from  '../components/reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts : [],
    allProducts :  [],
    sorting_products : "lowest",
    filters:{
        text : "",
        company : "all",
        category : "all",
    }
}

export const FilterProvider = ({children}) => {
    const {products, isLoading} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const sortingFunction = () => {
        dispatch({type : "SORT_DATA"})
    }

    // sorting the products.
    const updateValue = (event) => {
        const {name, value} = event.target;
        return dispatch({type : "VAL_UP", payload : {name, value}})
    }

    useEffect(() => {
        if(!isLoading) {
            dispatch({type : 'FILTER_PRODUCTS', payload : products})
        }
    }, [products])

    useEffect(() => {
        dispatch({type : 'SORT_PRO', payload : products});
    }, [state.sorting_products, products])

    useEffect(() => {
        dispatch({type: 'INPUT_DATA'})
    }, [ state.filters])


    return <FilterContext.Provider value={{...state, sortingFunction, updateValue}}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}