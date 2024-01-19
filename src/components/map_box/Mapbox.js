import "mapbox-gl/dist/mapbox-gl.css";

import Map, { Marker } from "react-map-gl";

const Mapbox = () => {
  const MAP_API = `${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

  return (
    <div>
      <Map
        initialViewState={{
          latitude: 51.51599196504296,
          longitude: -0.13669430446444675,
          zoom: 15.5,
        }}
        style={{ width: "100vw", height: 350 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAP_API}
      >
        <Marker
          longitude={-0.13669430446444675}
          latitude={51.51599196504296}
          color=" gray"
        />
      </Map>
    </div>
  );
};

export default Mapbox;
