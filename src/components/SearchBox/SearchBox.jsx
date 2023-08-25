import React from 'react'

const SearchBox = ({ className, placeHolder, handleOnChange }) => {
    return (
        <input
            className={`search-box ${className}`}
            placeholder={placeHolder}
            onChange={handleOnChange}
        />
    )
}

export default SearchBox