import { ActionTypes } from '../types';

export const slideCartOpen = (state) => {
    return {
        type: ActionTypes.SLIDE_CART_OPEN ,
        payload: state
    }
}
