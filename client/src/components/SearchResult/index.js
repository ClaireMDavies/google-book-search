import React from "react";

function SearchResult(props) {

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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SearchResult;

