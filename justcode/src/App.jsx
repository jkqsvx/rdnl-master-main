import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider';
import DataBase from './api/DataBase';
import Footer from "./components/Footer";
import { db } from './db';

function App() {
    const [searchResults, setSearchResults] = useState(db);

    const handleSearch = (searchTerm) => {
        const results = db.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className="App bg-body-tertiary">
            <Header onSearch={handleSearch} />
            <Slider />
            <DataBase items={searchResults} />
            <Footer />
        </div>
    );
}

export default App;
