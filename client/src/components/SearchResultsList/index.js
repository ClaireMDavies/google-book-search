import SearchResult from "../SearchResult";

function SearchResultsList(props) {
    
    return (
        <ul>
            {props.bookList.map(book => (
                <SearchResult key={book.id} book={book} />
            ))}        
        </ul>
    );
}

export default SearchResultsList;