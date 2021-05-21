import React from "react";

function SearchResult(props) {

    return (
        <li>{props.book.volumeInfo.title}</li>
    );
}

export default SearchResult;

