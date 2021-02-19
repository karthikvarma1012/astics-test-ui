import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "./button";
import Layout from "./layout"

const ItemDetails = (props) => {
    const { id } = props.match.params;
    const dataList = useSelector(state => state);
    const item = dataList[id];
    const history = new useHistory();
    const onBackButttonClick = () => {
        history.push("/dashboard");
    }
    return <Layout>
        <div className="item-details-container">

            <Button label="Back" className="btn" onClick={onBackButttonClick} />
            <div className="item-details-content-container">
                {item && <div className="item-details-label">{item.itemName}</div>}
                {item && <p className="item-details-price">$ {item.price}</p>}
                {item && <p className="item-details-description">{item.details}</p>}
            </div>
        </div>
    </Layout>
}

export default ItemDetails;