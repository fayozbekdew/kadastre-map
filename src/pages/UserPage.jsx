import React, { useState } from "react";
import { data } from "../../data/data";
import Header from "../sections/Header";
import MapEl from "../sections/Map";

function UserPage() {
  const [searchEl, setSearchEl] = useState([]);
  const [places, setPlaces] = useState(data);
  return (
    <div className="w-full h-screen">
      <Header setSearchEl={setSearchEl} setPlaces={setPlaces} />
      <MapEl setSearchEl={setSearchEl} searchEl={searchEl} places={places} />
    </div>
  );
}

export default UserPage;
