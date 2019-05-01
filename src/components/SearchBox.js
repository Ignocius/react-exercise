import  React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div>
            <input
                className="pa3 bg-washed-blue b--light-blue"
                type="search" 
                placeholde='search robots' 
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;