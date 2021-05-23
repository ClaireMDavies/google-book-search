import axios from 'axios';

function SavedBook(props) {

    async function deleteBook() {
        await axios.delete(`/api/books/${props.book._id}`);

        // refresh our list
        let response = await axios.get("/api/books");
        props.updateListCallback(response.data);
    }

    return (



        <div className="card" style={{ width: 1000, position: "relative" }}>

            <div className="card-body"  >
                <div className="row">
                    <div className="col-md-6">
                        <img src={props.book.image} Style={{ width: 150 }} alt="cover of book" />
                        <div className="row">
                            <div className="card-body"  >
                                <a href={props.book.link} className="btn" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }}> View</a>
                                <div className="card-body"  >
                                    <button className="btn" onClick={deleteBook} style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title"> {props.book.title}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h6>Written by </h6>{props.book.authors} </li>
                            <li className="list-group-item"><h6>Synopsis </h6>{props.book.description} </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default SavedBook;

