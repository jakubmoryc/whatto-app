import React from 'react'

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar">
            <input placeholder="Your favourite books, movies, games..."/>
            <i className="fas fa-search"></i>
        </div>
    );
  }

export default SearchBar