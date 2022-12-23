import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../components/reducers/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
            dispatch({type : "SET_LOADING"});
        try {
	        const response = await axios.get(url);
	        const uff = await response.data;
            dispatch({type : "MY_API_DATA", payload : uff});
        } catch (error) {
            dispatch({type : "API_ERROR"});
        }
    }
    useEffect(()=>{
        getProducts(API); 
    }, [])
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};