import React, { useState,useEffect } from "react";

import { supabase } from "../lib/supabaseClient";
import Header from "../sections/Header";
import MapEl from "../sections/Map";

function UserPage() {
  const [searchEl, setSearchEl] = useState([]);
  const [places, setPlaces] = useState([]);
  let [DATA, setData] = useState([]); 
  useEffect(() => {
    const fetchObjects = async () => {
      const { data, error } = await supabase.from("objects").select("*");
  
      if (error) {
        console.error("Error fetching objects:", error);
      } else {
        setPlaces(data);
        setData(data)
      }
    };
    fetchObjects();
  },[])
  return (
    <div className="w-full h-screen">
      <Header setSearchEl={setSearchEl} setPlaces={setPlaces} places={places} data={DATA} />
      <MapEl setSearchEl={setSearchEl} searchEl={searchEl} places={places} />
    </div>
  );
}

export default UserPage;
