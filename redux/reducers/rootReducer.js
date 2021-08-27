import { combineReducers } from "redux"
import { slideCardOpenReducer } from './slideCartOpenReducer';
import { productReducer} from './productReducer'

const rootReducer = combineReducers({
    productReducer: productReducer,
    slideCardOpenReducer : slideCardOpenReducer
})

export default rootReducer;