import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./layout";
import Input from "./input";
import Items from "./items";
import Button from "./button";
import { useSelector } from "react-redux";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Dashboard = () => {
    const originalData = useSelector(state => state);
    const originalKeys = Object.keys(originalData) || [];
    const [itemList, setItemList] = useState(Object.keys(originalData) || []);
    const [searchInput, setSearchInput] = useState("");
    const [numberOfPages, setnumberOfPages] = useState(Math.ceil(originalKeys.length / 2));
    const [currentPage, setCurrentPage] = useState(0)
    const [nameSortAscOrder, setNameSortAscOrder] = useState(true);
    const [priceSortAscOrder, setPriceSortAscOrder] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("userName")) {
            history.push("/");
        }
    }, []);

    useEffect(() => {
        setnumberOfPages(Math.ceil(originalKeys.length / 2));
        setItemList(Object.keys(originalData));
    }, [originalData]);

    const onSearchInputChange = (e) => {
        const searchText = e.target.value;
        const filteredList = originalKeys.filter(key => originalData[key].itemName.toLowerCase().includes(searchText.toLowerCase()));
        setSearchInput(searchText);
        setItemList(filteredList);
        setnumberOfPages(Math.ceil(filteredList.length / 2));
    }

    const onAddItemClick = () => {
        history.push("/items/create");
    }

    const onNameSort = () => {
        let sortedKeys = originalKeys;
        if (nameSortAscOrder) {
            sortedKeys = originalKeys.sort((a, b) =>
                originalData[a].itemName > originalData[b].itemName ? 1 :
                    originalData[b].itemName > originalData[a].itemName ? -1 : 0);
        } else {
            sortedKeys = originalKeys.sort((a, b) =>
                originalData[a].itemName < originalData[b].itemName ? 1 :
                    originalData[b].itemName < originalData[a].itemName ? -1 : 0);
        }
        setNameSortAscOrder(!nameSortAscOrder);
        setItemList(sortedKeys);
    }

    const onPriceSort = () => {
        let sortedKeys = originalKeys;
        if (priceSortAscOrder) {
            sortedKeys = originalKeys.sort((a, b) =>
                originalData[a].price - originalData[b].price);
        } else {
            sortedKeys = originalKeys.sort((a, b) =>
                originalData[b].price - originalData[a].price);
        }
        setPriceSortAscOrder(!priceSortAscOrder);
        setItemList(sortedKeys);
    }

    const getItemList = () => {
        const currentPageItems = itemList.slice(currentPage * 2, (currentPage * 2) + 2);
        return currentPageItems;
    }

    const onPageChange = (index) => {
        setCurrentPage(index)
    }

    const onExportClick = () => {
        if (originalKeys.length) {
            const dataArray = originalKeys.map(key => originalData[key]);
            const csvData = objectToCsv(dataArray);

            const blob = new Blob([csvData], { type: 'text/csv', download: 'download.csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', 'download.csv');
            document.body.append(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    const objectToCsv = (data) => {
        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));
        for (const dataRow of data) {
            const values = headers.map(header => {
                const escape = ('' + dataRow[header]).replace(/"/g, '\\"');
                return `"${escape}"`;
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }

    return <Layout className="container">
        <div className="btn-container">

            <Button className="btn secondary" label="Export" onClick={onExportClick} />
            <Button className="btn primary" label="Add item" onClick={onAddItemClick} />
        </div>

        <div className="search-wrapper">
            <Input
                type="text"
                value={searchInput}
                onChange={onSearchInputChange}
                placeholder="search..."
            />
            <p className="sort-label" onClick={onNameSort}>Name <span>{nameSortAscOrder ? <AiFillCaretDown /> : <AiFillCaretUp />}</span></p>
            <p className="sort-label" onClick={onPriceSort}>Price <span>{priceSortAscOrder ? <AiFillCaretDown /> : <AiFillCaretUp />}</span></p>
        </div>
        <div>
            <Items dataList={getItemList()} />
        </div>
        <div className="pagination-container">
            {[...Array(numberOfPages).keys()].map((key, index) => <Button className="pagination-btn" key={index} label={index + 1} onClick={() => onPageChange(index)} />
            )}
        </div>
    </Layout>
}

export default Dashboard;