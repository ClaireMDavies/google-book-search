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
    
    if (bookList && bookList.length > 0)
    {
        return (

            <div style={{paddingTop:10}}>
                
                {bookList.map(book => (
                    <SavedBook key={book._id} book={book} updateListCallback={setBookList} />
                ))}        
            </div>
        );
    }
    else
    {
        return (
        <div className="card" style={{padding:10, color:"rgb(94, 53, 4)"}}>
            <h5>You have no saved books</h5>
        </div>
        );
    }
}

export default SavedBooksList;