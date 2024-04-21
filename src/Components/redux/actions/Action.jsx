export const ADD =(item)=>{
    return{
        type: 'AddToCart',
        payload: item
    }
}

export const RMV =(id)=>{
    return{
        type: 'DeleteItem',
        payload: id
    }
}