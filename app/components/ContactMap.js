"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function ContactMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const defaultPosition = { lat: 11.3905109, lng: 124.8844867 }; 

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="w-full h-[350px] xl:h-full"
      style={{
        aspectRatio: "2 / 1",  
      }}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={defaultPosition}
        zoom={15}
      >
        <Marker position={defaultPosition} />
      </GoogleMap>
    </div>
  );
}
