// action creators

import * as ActionTypes from "./action-types";



export const addProductToCart = (product: any) => ({
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
        item: {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        }
    }
})

export const addItem = (item: any) => ({
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item
        }
    })

export const removeItem = (id: any) => ({
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id
        }
    })

export const updateItem = (id: any, qty: any) => ({
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id,
            qty: parseInt(qty)
        }
    })

export const empty = () => ({
        type: ActionTypes.EMPTY_CART
    })