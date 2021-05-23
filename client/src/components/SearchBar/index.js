import React from "react";

function SearchBar(props) {

    const searchField = React.useRef();

    const [errorMessage, setErrorMessage] = React.useState("");

    async function handleClick(event) {

        // search here
        try {

            setErrorMessage("");

            if (searchField.current.value.length === 0) {
                setErrorMessage("Please enter a search term");
            }
            else {
                let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField.current.value}`, {
                    method: 'GET',
                });

                let responseData = await response.json();

                if (responseData.items === undefined) {
                    setErrorMessage("No results");
                }
                else {
                    props.resultsCallback(responseData.items);
                }
            }
        } catch (error) {
            setErrorMessage(error);
        }
    }

    return (

        <div className="card" style={{ width: "100%", position: "relative" }}>
            <div className="card-body" >
                <input className="form-control me-2" ref={searchField} type="text" placeholder="Search for a book" aria-label="Search"></input>
                <div className="card-body" >
                    <button onClick={handleClick} className="btn btn-outline" style={{ backgroundColor: "rgb(141, 81, 7)", color: "white" }} type="submit">Search</button>
                </div>
                <div><span>{errorMessage}</span></div>
            </div>
        </div>
    );
}

export default SearchBar;