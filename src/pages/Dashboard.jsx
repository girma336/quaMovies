import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { useSelector } from 'react-redux';
import './../style/Dashboard.css';
import Movies from '../components/Movies';

const Dashboard = ({ setDetail }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const { movies } = useSelector((state) => state.movies)

    useEffect(() => {
        const filteredResults = movies?.filter((item) =>
            item.show.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredData(filteredResults);
    }, [searchQuery, movies]);

    return (
        <div>
            <div className="header-container">
                <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            </div>
            <div className="body__movies">
                <Movies movies={filteredData} setDetail={setDetail} />
            </div>
        </div>
    )
}

export default Dashboard