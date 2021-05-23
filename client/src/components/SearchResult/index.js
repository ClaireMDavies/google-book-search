import React from 'react';
import axios from 'axios';

function SearchResult(props) {

    const [allowSave, setAllowSave] = React.useState(true);

    React.useEffect(() => {

        async function checkWhetherBookAlreadySaved(googleBookId) {

            // use the Google book id to see if we have already saved 
            // this book, and hide the Save button accordingly

            try
            {
                let matches = await axios.get(`/api/books/${googleBookId}`);

                if (matches.data.length > 0)
                {
                    setAllowSave(false);
                }
            }
            catch (error)
            {
                alert(error);
            }
        }

        checkWhetherBookAlreadySaved(props.book.id);
    });

    function saveBook() {
        let bookData = {};
        bookData.title = props.book.volumeInfo.title;
        bookData.authors = props.book.volumeInfo.authors;
        bookData.description = props.book.volumeInfo.description;
        bookData.image = props.book.volumeInfo.imageLinks.smallThumbnail;
        bookData.link = props.book.volumeInfo.canonicalVolumeLink;
        bookData.googleBookId = props.book.id;

        axios.post("/api/books", bookData);

        setAllowSave(false);
    }

    return (

        <div className="card" style={{ width: 1000, position: "relative" }}>

            <div className="card-body"  >
                <div className="row">
                    <div className="col-md-6">
                        <img src={props.book.volumeInfo.imageLinks.smallThumbnail} Style={{ width: 150 }} className="card-img" alt="..." /></div>
                    <div className="col-md-6">
                        <h5 className="card-title"> {props.book.volumeInfo.title}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h6>Written by </h6>{props.book.volumeInfo.authors} </li>
                            <li className="list-group-item"><h6>Synopsis </h6>{props.book.volumeInfo.description} </li>
                        </ul>
                        <div className="row">
                            <a href={props.book.volumeInfo.canonicalVolumeLink} className="btn" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }}> View</a>
                            <div className="btn" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }}> Save</div>

                            {allowSave ? <button onClick={saveBook}>Save</button> : <span>Saved</span> }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SearchResult;

