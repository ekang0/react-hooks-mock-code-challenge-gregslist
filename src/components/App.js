import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListing] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => {
      setListing(data)
    })
  }, []);

  function handleRemoveListing(id) {
    //console.log("handleRemoveListing is working for id", id);
    const updatedListings = listings.filter(listing => listing.id === id ? null : listing);
    setListing(updatedListings);
  };

  /*
  function handleSearchListing(search){
    //console.log("search working for", search);
    const updatedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));
    if(search === "") {
      setListing(listings)
    } else {
      setListing(updatedListings);
    }
  };
*/
//changed function above to the variable displayList and changed the Header component callback prop to setSearch instead of function handleSearchListing and changed ListingsContainer component prop in listings to displayList. Had to add state for search in App component because we are changing the state. 

  const displayList = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayList} handleRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
