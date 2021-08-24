import { ActionTypes } from '../types';

const initialState = {
    products : [
        {
            id: 1,
            title: "Salman"
        }
    ]
} 

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.PRODUCT_LISTING:
            return state;
        default:
            return state;
    }

}