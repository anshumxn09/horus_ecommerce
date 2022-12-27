import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../components/reducers/cartReducer';


const CartContext = createContext();

const localCartData = () => {
    let cart = localStorage.getItem('cartValue');
    if(cart !== []){
        return JSON.parse(cart);
    }
    else{
        return [];
    }
}
const initialState = {
    cart : localCartData(),
    total_amount : 0,
    shipping_fee : 50000
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, singleProduct, color, quantity) => {
        dispatch({type : 'ADD_TO_CART', payload : {id, singleProduct, color, quantity}});
    }

    const addOne = (id) => {
        dispatch({type : 'INC_QUAN', payload : id})
    }

    const minusOne = (id) => {
        dispatch({type : 'DEC_QUAN', payload : id});
    }

    const removeItem = (id) => {
        dispatch({type : "REMOVE_FROM_CART", payload : id})
    }

    const clearCart = () => {
        if(window.confirm('Are you sure to remove all the items from cart?')){
            dispatch({type : "CLEAR_CART"})
        }
    }
    // adding data to local storage...
    useEffect(() => {
        dispatch({type : 'TOTAL_MONEY'});
        localStorage.setItem('cartValue', JSON.stringify(state.cart));
    }, [state.cart])

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, addOne, minusOne}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartContext, CartProvider, useCartContext};
