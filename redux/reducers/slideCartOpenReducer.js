import { ActionTypes } from '../types'

export const slideCardOpenReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.SLIDE_CART_OPEN:
      return !state
    default:
      return state
  }
}
