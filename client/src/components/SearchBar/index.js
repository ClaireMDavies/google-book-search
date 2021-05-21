import React from "react";

function SearchBar(props) {

    const searchField = React.useRef();

    async function handleClick(event) {

        // search here

        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField.current.value}`, {
            method: 'GET',
        });

        let responseData = await response.json();

        props.resultsCallback(responseData.items);
    }

    return (
        <div className= "container" style={{ paddingTop: 15 }}>


        <div className="card" style={{ width: 1000, position: "relative" }}>
            <div className="card-body" >

                <input className="form-control me-2" ref={searchField} type="text" placeholder="Search for a book" aria-label="Search"></input>
                <button onClick={handleClick} class="btn btn-outline" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white"}} type="submit">Search</button>

            </div>
        </div>
        </div>
    );
}

export default SearchBar;