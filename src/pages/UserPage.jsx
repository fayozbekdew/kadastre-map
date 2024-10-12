import React, { useState,useEffect } from "react";
import { data } from "../../data/data";
import { supabase } from "../lib/supabaseClient";
import Header from "../sections/Header";
import MapEl from "../sections/Map";

function UserPage() {
  const [searchEl, setSearchEl] = useState([]);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchObjects = async () => {
      const { data, error } = await supabase.from("objects").select("*");
  
      if (error) {
        console.error("Error fetching objects:", error);
      } else {
        setPlaces(data);
      }
    };
    fetchObjects();
  },[])
  console.log(places)
  return (
    <div className="w-full h-screen">
      <Header setSearchEl={setSearchEl} setPlaces={setPlaces} places={places} />
      <MapEl setSearchEl={setSearchEl} searchEl={searchEl} places={places} />
    </div>
  );
}

export default UserPage;
