import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer( { listings, handleRemoveListing } ) {

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (<ListingCard key={listing.id} listing={listing} handleRemoveListing={handleRemoveListing}/>))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
