import React from "react";
import PlaceItem from "./PlaceItem";
import { Card } from "@mui/material";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card className="place-item__custom">
          <h2>No places found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="place-list">
        {props.items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creatorId}
            coordinates={place.location}
          />
        ))}
      </ul>
    );
  }
};

export default PlaceList;
