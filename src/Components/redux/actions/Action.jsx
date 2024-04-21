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

export const DEC_QNTY =(item)=>{
    return{
        type: 'DecreaseQnty',
        payload: item
    }
}