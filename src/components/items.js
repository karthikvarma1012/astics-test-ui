import { useSelector } from "react-redux";
import data from "../data.json";
import Item from "./item";

const Items = ({ dataList }) => {
  const originalData = useSelector(state => state);
  return <div className="items-list-container">
    {dataList && dataList.map((key, index) => {
      return <Item key={index}  {...originalData[key]} />
    })}
  </div>
}

export default Items;