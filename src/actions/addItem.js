import { Add_Item, DELETE_ITEM } from "../type"

const addItem = (payload) => {
  return {
    type: Add_Item,
    payload
  }
}

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
});

export default addItem;