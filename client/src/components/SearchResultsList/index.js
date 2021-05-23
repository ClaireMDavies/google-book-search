import SearchResult from "../SearchResult";

function SearchResultsList(props) {
    
    return (
        <div style={{paddingTop:10}}>
            {props.bookList.map(book => (
                <SearchResult key={book.id} book={book} />
            ))}        
        </div>
    );
}

export default SearchResultsList;