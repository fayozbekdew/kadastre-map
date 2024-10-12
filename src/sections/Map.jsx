import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark, TypeSelector } from "react-yandex-maps";
import { CloseBtn, SearchImg, StoryImg } from "../assets";
import Modal from "react-modal";
import { data } from "../../data/data";

Modal.setAppElement("#root");

const MapEl = ({ searchEl, setSearchEl,places }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searchObj, setSearchObj] = useState({});
  const [searchList, setSearchList] = useState([]);
  // Obyektlar ma'lumotlari (taxminiy 5 ta obyekt)
  
  const [zoom, setZoom] = useState(10);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 18)); // Maksimal zoom darajasi 18
  };
console.log(zoom)
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 0)); // Minimal zoom darajasi 0
  };

  const openModal = (place) => {
    setSelectedPlace(place);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPlace(null);
  };
  useEffect(() => {
    // Foydalanuvchining joylashuvini aniqlash
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]); // joylashuvni saqlaymiz
      },
      (error) => {
        console.error("Geolocation xatoligi:", error);
      }
    );
  }, []);
  // Yangi obyektlarni API'dan olish (simulatsiya qilinmoqda)
  useEffect(() => {
    // Bu yerda siz obyektlarni API orqali dinamik ravishda olasiz
    // Masalan: fetch('/api/objects').then((response) => setPlaces(response.data));
  }, []);
  return (
    <YMaps query={{ apikey: "59877cbf-2654-4cfc-b2bc-626e1807065f" }}>
      {searchEl.length > 0 ? (
        <div className="flex flex-col rounded-md text-white p-2 w-[330px] max-w-full h-[85%] absolute left-3 bottom-3 z-10 bg-[#548de7]">
          <button onClick={() => setSearchEl([])}>
            <img
              src={CloseBtn}
              width="20px"
              height={"20px"}
              className="absolute top-2 right-2"
            />
          </button>
          <h1 className="mx-auto text-white text-[20px] font-bold">
            About Object
          </h1>
          <img src={searchEl[0]?.img} className="w-full h-[150px]" alt="" />
          <h2>{searchEl[0]?.title}</h2>
          <p>{searchEl[0]?.cadastralNumber}</p>
          <p>coordinates: {searchEl[0]?.coordinates}</p>
          <p>status: {searchEl[0]?.status}</p>
          <p>cadastralCost: {searchEl[0]?.cadastralCost}</p>
          <p>address:{searchEl[0]?.address}</p>
          <p>area: {searchEl[0]?.area}</p>
        </div>
      ) : null}
      <Map
        state={{ center: [55.751574, 37.573856], zoom: zoom }}
        className="w-full h-full"
        options={{
            searchControl: 'none',
            zoomControl: 'default', // Standart zoom control'ni o'chirib qo'ying
          }}
      >
        {userLocation && (
          <Placemark
            geometry={userLocation} // Foydalanuvchining joylashuvi
            properties={{ balloonContent: "Sizning joylashuvingiz" }}
            options={{
              iconLayout: "default#image",
              iconImageHref:
                "https://img.icons8.com/ios-filled/50/000000/marker.png", // Marker rasmi
              iconImageSize: [20, 20],
              iconImageOffset: [-15, -15],
            }}
          />
        )}
        {places.map((place) => (
          <Placemark
            onClick={() => openModal(place)}
            key={place.id}
            geometry={place.coordinates}
            properties={{ balloonContent: place.title }}
            options={{
              iconLayout: "default#image",
              iconImageHref: place.icon, // Bu yerda obyektning maxsus rasmini joylashtiramiz
              iconImageSize: [30, 42], // Rasmning o'lchami (o'zingiz moslashtirishingiz mumkin)
              iconImageOffset: [-15, -42], // Marker pozitsiyasi (sozlash uchun)
            }}
          />
        ))}
        <TypeSelector options={{ float: "right" }} />
      </Map>
      <div className="zoom-buttons">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>
      {/* Modal */}
      <Modal
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "500px",
            padding: "20px 20px 20px 20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Modal fon rangini o'zgartirish
            zIndex: "9999",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <img src={selectedPlace?.img} className="w-full h-[150px]" alt="" />
        <h2>{selectedPlace?.title}</h2>
        <p>{selectedPlace?.cadastralNumber}</p>
        <p>coordinates: {selectedPlace?.coordinates}</p>
        <p>status: {selectedPlace?.status}</p>
        <p>cadastralCost: {selectedPlace?.cadastralCost}</p>
        <p>address:{selectedPlace?.address}</p>
        <p>area: {selectedPlace?.area}</p>
        <button onClick={closeModal}>
          <img
            src={CloseBtn}
            width="20px"
            height={"20px"}
            className="absolute top-2 right-2"
          />
        </button>
      </Modal>
    </YMaps>
  );
};

export default MapEl;
