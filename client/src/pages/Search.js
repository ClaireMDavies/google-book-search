import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

function Search() {

    const [bookList, setBookList] = React.useState([]);

    function processSearchResults(searchResults) {

        setBookList(searchResults);
    }

    return (
        <div className= "container" style={{ paddingTop: 15 }}>
            <SearchBar resultsCallback={processSearchResults} />
            <SearchResultsList bookList={bookList} />
        </div>
    );
}

export default Search;