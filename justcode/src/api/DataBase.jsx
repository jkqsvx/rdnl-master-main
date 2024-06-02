import React from 'react';
import Cards from "../components/Cards"; // Adjust the import path if necessary
import "../App.css";

const DataBase = ({ items, searchTerm }) => {
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cardsView">
            <Cards items={filteredItems} />
        </div>
    );
}

export default DataBase;
