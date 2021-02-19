import { useHistory } from "react-router-dom";
import Button from "./button";
import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions/addItem";

const Item = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onDetailsClick = (path) => {
    history.push(path);
  }

  const onItemDelete = () => {
    dispatch(deleteItem(props.id))
  }

  return <div className="item-container">
    <div className="item-label">{props.itemName}</div>
    <div className="delete-icon-wrapper">
      <MdDelete color="#a9a9a9" onClick={onItemDelete} />
    </div>
    <p className="item-price">$ {props.price}</p>
    <div className="button-container">
      <Button className="btn" label="Details" onClick={() => onDetailsClick(`/items/details/${props.id}`)} />
    </div>
  </div>
}

export default Item;