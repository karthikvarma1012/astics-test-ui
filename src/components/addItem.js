import { useState } from "react"
import Button from "./button"
import Input from "./input"
import Layout from "./layout"
import { useSelector, useDispatch } from "react-redux"
import addItem from "../actions/addItem"
import { useHistory } from "react-router"

const AddItem = () => {
    const initialState = {
        itemName: "",
        price: "",
        details: "",
        id: 0
    }
    const [item, setItem] = useState(initialState)
    const dispatch = useDispatch();

    const onInputChange = (input) => {
        setItem({ ...item, ...input });
    }
    const history = useHistory();

    const onAddItemClick = () => {
        // item.id = itemsList ? itemsList.length : 0;
        if (item.itemName && item.price > 0 && item.details) {
            dispatch(addItem(item));
            history.push("/");
        }
    }

    const onCancelClick = () => {
        history.push("/");
    }

    return <Layout>
        <h1>Add Item</h1>
        <Input type="text"
            placeholder="Enter item name"
            value={item.itemName}
            onChange={(e) => onInputChange({ itemName: e.target.value })}
            label="Item name" />

        <Input type="number"
            placeholder="Enter price greater than 0"
            value={item.price}
            onChange={(e) => onInputChange({ price: e.target.value })}
            label="Price" />

        <Input type="text"
            placeholder="Enter details"
            value={item.details}
            onChange={(e) => onInputChange({ details: e.target.value })}
            label="Details" />

        <Button className="btn primary" label="Add item" onClick={onAddItemClick} />
        <Button className="btn secondrary" label="Cancel" onClick={onCancelClick} />
    </Layout>
}

export default AddItem;