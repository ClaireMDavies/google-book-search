import React from "react";

function SearchForm(props) {

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search for a book title</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search for a book title"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;