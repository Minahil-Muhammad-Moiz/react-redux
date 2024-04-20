const InitialState={
    carts:[]
}

export const cartReducer = (state=InitialState, action)=>{
    switch(action.type){
        case 'AddToCart':
            return{
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}