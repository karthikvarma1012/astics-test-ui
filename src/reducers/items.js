import { Add_Item, DELETE_ITEM } from "../type";

const initialState = {};
const itemsReducer = (state = initialState, action) => {
  if (action.type === Add_Item) {
    const id = Date.now().toString(36);
    const updatedState = { ...state };
    const payload = { ...action.payload, id }
    updatedState[id] = payload;
    return updatedState;
  } else if (action.type === DELETE_ITEM) {
    const updatedState = { ...state };
    delete updatedState[action.payload];
    return updatedState;
  }
  return state;
}

export default itemsReducer;