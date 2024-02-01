import React from 'react'
import './../style/Search.css';

const Search = ({ searchQuery, setSearchQuery }) => {
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className='search__bar'>
            <div className="search__input">
                <input
                    type='text'
                    value={searchQuery}
                    placeholder='Search in Job Title'
                    onChange={handleSearch}
                    className='input-field'
                />
            </div>
        </div>
    )
}

export default Search;