import React from 'react';
import './search-box.styles.css';

// Can also not use destructuring but use props, ex: (props) => placeholder={props.placeholder}
export const SearchBox = ({ placeholder, handleChange }) => {
    return <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
    /* setState can take two args -> state attr and callback fxn that happens after setting state */
}