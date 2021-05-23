import React from 'react';
import axios from 'axios';

function SearchResult(props) {

    const [allowSave, setAllowSave] = React.useState(true);

    React.useEffect(() => {

        async function checkWhetherBookAlreadySaved(googleBookId) {

            // use the Google book id to see if this book is already saved,
            // and hide the Save button accordingly

            try {
                let matches = await axios.get(`/api/books/${googleBookId}`);

                if (matches.data.length > 0) {
                    setAllowSave(false);
                }
            }
            catch (error) {
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

        <div className="card" style={{ width: "100%", position: "relative" }}>
            <div className="card-body"  >
                <div className="row">
                    <div className="col-md-6">
                        <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt="cover of book" />
                        <div className="row">
                            <div className="card-body"  >
                                <a href={props.book.volumeInfo.canonicalVolumeLink} className="btn" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }}> View</a>
                                <div className="card-body"  >
                                    {allowSave ? <button className="btn" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }} onClick={saveBook}>Save</button> : <span className="btn" style={{ backgroundColor: "rgb(240, 179, 105)", color: "white", cursor: "default" }} >Saved</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title"> {props.book.volumeInfo.title}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h6>Written by </h6>{props.book.volumeInfo.authors} </li>
                            <li className="list-group-item"><h6>Synopsis </h6>{props.book.volumeInfo.description} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;

