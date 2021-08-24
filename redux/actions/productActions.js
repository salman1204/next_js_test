import { ActionTypes } from '../types';

export const productListing = (products) => {
    return {
        type: ActionTypes.PRODUCT_LISTING,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}