import React from 'react';
import SavedBook from "../SavedBook";
import axios from 'axios';

function SavedBooksList() {

    const [bookList, setBookList] = React.useState([]);

    React.useEffect(() => {

        async function fetchData() {
            let response = await axios.get("/api/books");
            setBookList(response.data);
        }

        fetchData();
    }, []);
    
    return (
        <div style={{paddingTop:10}}>
            {bookList.map(book => (
                <SavedBook key={book._id} book={book} updateListCallback={setBookList} />
            ))}        
        </div>
    );
}

export default SavedBooksList;