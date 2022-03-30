import React, { useState } from "react";

function ListingCard( { listing, handleRemoveListing } ) {
  const [favState, setFavState] = useState(true);
  //console.log(listing);
  const {id, description, image, location} = listing ;

  function handleFavState() {
    setFavState(!favState)
  };
  
  function onDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    handleRemoveListing(id)
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favState ? (
          <button onClick={handleFavState} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavState} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
