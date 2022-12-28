const CartReducer = (state, action) => {
    if(state.cart)
    switch(action.type){
        case 'TOTAL_MONEY':
            let money = state.cart.reduce((sum, elem) => {
               sum += (elem.price * elem.quantity)
               return sum;
            }, 0)
            return {
                ...state,
                total_amount : money,
            }
        case 'INC_QUAN':
            let updated = state.cart.map((elem) => {
                if(elem.id === action.payload){
                    let newQ = elem.quantity + 1;
                    if(newQ >= elem.max){
                        newQ = elem.max
                    }
                    return {
                        ...elem,
                        quantity : newQ
                    }
                }else{
                    return elem;
                }
            })
            return {
                ...state,
                cart : updated,
            }
            case 'DEC_QUAN':
                let update = state.cart.map((elem) => {
                    if(elem.id === action.payload){
                        let newQ = elem.quantity - 1;
                        if(newQ < 1){
                            newQ = 1
                        }
                        return {
                            ...elem,
                            quantity : newQ
                        }
                    }else{
                        return elem;
                    }
                })
                return {
                    ...state,
                    cart : update,
                }

        case 'CLEAR_CART':
            return {
                ...state,
                cart : []
            }
        case 'REMOVE_FROM_CART':
            let updatedCart = state.cart.filter((elem) => {
                return elem.id !== action.payload;
            })
            return {
                ...state,
                cart : updatedCart,
            }
        case 'ADD_TO_CART':
            let {id, singleProduct, color, quantity} = action.payload;
            // console.log(id, singleProduct);
            // tackling with the existing data in the cart.
            let newId = id+color;
            let isExist = state.cart.find((elem) => {
                return elem.color === color;
            })

            let  cartProduct;
            if(color === null){
                color = singleProduct.colors[0];
            }

            if(isExist){
                let updatePro = state.cart.map((elem) => {
                    let newQuantity;
                    if(elem.id === newId){
                        newQuantity = elem.quantity + quantity;
                        if(newQuantity >= elem.max){
                            newQuantity = elem.max;
                        }
                        return {
                            ...elem,
                            quantity : newQuantity,
                        }
                    }
                    else{
                        return elem;
                    }
                })
                return {
                    ...state,
                    cart : updatePro,
                }
            }else{
                cartProduct = {
                    id : id+color,
                    name : singleProduct.name,
                    color,
                    quantity,
                    image : singleProduct.image[0].url,
                    max : singleProduct.stock,
                    price : singleProduct.price
                }
            }

            return{
                ...state,
                cart : [...state.cart, cartProduct],
            }
        default:
            return state;
    }
}

export default CartReducer;