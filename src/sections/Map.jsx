import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { CloseBtn, SearchImg, StoryImg } from "../assets";
import Modal from "react-modal";
import { data } from "../../data/data";

Modal.setAppElement("#root");

const MapEl = ({ searchEl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchObj, setSearchObj] = useState({});
  const [searchList, setSearchList] = useState([]);
  // Obyektlar ma'lumotlari (taxminiy 5 ta obyekt)
  const [places, setPlaces] = useState(data);

  const openModal = (place) => {
    setSelectedPlace(place);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPlace(null);
  };
  // Yangi obyektlarni API'dan olish (simulatsiya qilinmoqda)
  useEffect(() => {
    // Bu yerda siz obyektlarni API orqali dinamik ravishda olasiz
    // Masalan: fetch('/api/objects').then((response) => setPlaces(response.data));
  }, []);
  console.log(searchEl)
  return (
    <YMaps query={{ apikey: "59877cbf-2654-4cfc-b2bc-626e1807065f" }}>
      {searchEl.length > 0  ? (
        <div className="flex flex-col rounded-md p-2 w-[330px] max-w-full h-[85%] absolute left-3 bottom-3 z-10 bg-[#548de7]">
          <h1 className="mx-auto text-white text-[20px] font-bold">
            About Object
          </h1>
        </div>
      ) : null}
      <Map
        defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
        className="w-full h-full"
      >
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
      </Map>
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
            padding: "20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Modal fon rangini o'zgartirish
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
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
